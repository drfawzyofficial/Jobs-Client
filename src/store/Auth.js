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
    user: null,
    statistics: null,
    chances: [],
    chance: { },
    chancesCount: 0,
    wishlists: []
  },
  actions: {
    async Signup({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/signup", payload);
        if (data.statusCode === 201) {
          window.Swal.fire({ title: 'إنشاء حساب الطالب', icon: "success", text: data.message, confirmButtonText: 'تفهمت' })
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async Login({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/login", payload);
        if (data.statusCode === 200) {
          localStorage.setItem("token", data.result.token);
          router.push("/student/dashboard")
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async createContact({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/contact/create", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'تم إنشاء نموذج التواصل', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
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
        const data = await Fetch("GET", "/student/getprofile");
        if (data.statusCode === 200) {
          commit("setUser", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' })
      }
    },
    async submitCode({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/code/submit", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'تفعيل الحساب', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
          dispatch("Auth/GetProfile", {}, { root: true });
        } else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async resendCode({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/code/resend", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'إرسال الرمز', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        } else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async deleteAccount({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("Delete", "/student/delete", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'حذف الحساب', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
         setTimeout(() => {
          localStorage.removeItem("token");
          commit("unSetUser");
          router.push("/")
         }, 3000);
        } else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async changePassword({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/password/change", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'تغيير كلمة السر', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        } else if(data.statusCode === 202) {
          window.Swal.fire({ title: 'خطأ!', text: data.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        } else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async changeAvatar({ dispatch, commit }, payload) {
      try {
        const data = await Fetch("POST", "/student/update-avatar", payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'تغيير الصورة الشخصية', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' })
        }  else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
      }
    },
    async editProfile({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/student/editProfile", payload);
        if (data.statusCode === 200) {
          dispatch("Auth/GetProfile", {}, { root: true });
          window.Swal.fire({ title: 'تعديل البيانات الشخصية', icon: "success", text: data.message, confirmButtonText: 'تفهمت الأمر' });
        } else if(data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async GetStatistics({ dispatch, commit }, payload) {
      try {
        const data = await Fetch("GET", "/admin/statistics/get");
        if (data.statusCode === 200) {
          commit("setStatistics", data.result);
        } else if (data.statusCode === 401) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'تفهمت' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' })
      }
    },
    async ChancesGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/student/chances/get/?page_no=${payload.page_no}`);
        if (data.statusCode === 200) {
          commit("chancesGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chanceGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/student/chance/get?chance_id=${ payload.chance_id }`);
        console.log(data);
        if (data.statusCode === 200) {
          commit("chanceGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async WishlistsGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/student/wishlists/get/?page_no=${payload.page_no}`, payload);
        console.log(data);
        if (data.statusCode === 200) {
          commit("wishlistsGet", data.result);
        } else if(data.statusCode == 400) {
          commit("wishlistsGet", { wishlists: [ ]});
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'تفهمت' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'تفهمت' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async Logout({ dispatch, commit }) {
      try {
        dispatch("Collection/loading", true, { root: true });
        await Fetch("GET", "/student/logout");
        localStorage.removeItem("token");
        commit("unSetUser");
        dispatch("Collection/loading", false, { root: true });
        router.push("/account/login")
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'تفهمت الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
     
    },
  },
  mutations: {
    chancesGet(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
    chanceGet(state, data) {
      state.chance = data.chance;
    },
    wishlistsGet(state, data) {
      state.wishlists = data.wishlists;
      console.log(state.wishlists);
    },
    setStatistics(state, statistics) {
      state.statistics = statistics;
    },
    setUser(state, user) {
      state.user = user;
    },
    unSetUser(state) {
      state.user = null;
    },
  },
};
