// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";

// Declarations
import swal from 'sweetalert2';
window.Swal = swal;

// Admin_Store Export
export const Admin_Store = {
  namespaced: true,
  state: {
    chances: [],
    chancesCount: 0
  },
  actions: {
    async jobCreate({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", '/job/create', payload);
        if (data.statusCode === 200) {
          commit("jobCreate", data.result);
          window.Swal.fire({ title: 'إنشاء الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async helperPost({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", '/helper/post', payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'تمت الإضافة بنجاح', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chancesGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/job/getchances/?page_no=${payload.page_no}`);
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
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chancesSearch({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/job/searchchances`, payload);
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
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async jobDelete({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/job/remove`, { _id: payload._id });
        if (data.statusCode === 200) {
          commit("jobDelete", data.result);
          window.Swal.fire({ title: 'حذف الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'حذف الفرصة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async jobEdit({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("PUT", '/job/update', payload);
        if (data.statusCode === 200) {
          commit("jobEdit", data.result);
          window.Swal.fire({ title: 'تعديل الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
  },
  mutations: {
    jobCreate(state, data) {
      state.chances.push(data)
    },
    chancesGet(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
    jobDelete(state, data) {
      const newJobs = state.chances.filter((item) => item._id !== data._id);
      state.chances = newJobs;
    },
    jobUpdate(state, data) {
      const ObjIndex = state.chances.findIndex((item) => item._id == data._id);
      state.chances[ObjIndex] = data;
    },
    chancesSearch(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
  }
}
