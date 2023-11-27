// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";
import { router } from "../router";

// Declarations
import swal from 'sweetalert2';
window.Swal = swal;

// Auth Export
export const Auth = {
  namespaced: true,
  state: {
    user: null
  },
  actions: {
    async Login({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/admin/login", payload);
        if (data.statusCode === 200) {
          localStorage.setItem("token", data.result.token);
          router.push("/dashboard")
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async GetProfile({ dispatch, commit }, payload) {
      try {
        const data = await Fetch("GET", "/admin/getprofile");
        if (data.statusCode === 200) {
          commit("setUser", data.result);
        } else if (data.statusCode === 401) {
          dispatch("Auth/AdminLogout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' })
      }
    },
    async AdminLogout({ dispatch, commit }) {
      localStorage.removeItem("token");
      commit("unSetUser");
      router.push("/");
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    unSetUser(state) {
      state.user = null;
    },
  },
};
