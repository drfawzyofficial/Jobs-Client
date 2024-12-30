// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";
import swal from 'sweetalert2';
window.Swal = swal;

// Collection Export
export const Collection = {
    namespaced: true,
    state: {
        countries: [],
        cities: [],
        roles: [],
        branches: [],
        loading_status: false,
        helperObj: {}
    },
    actions: {
        loading({ commit }, loading_status) {
            commit('loading', loading_status);
        },
        async GetHelper({ dispatch, commit }) {
            try {
                const data = await Fetch("GET", `/helper/get`);
                if (data.statusCode === 200) {
                    commit("helperObj", data.result);
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'استرجاع بيانات المساعدة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deleteJobCategory({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteJobCategory`, payload);
                if (data.statusCode === 200) {
                    commit("deleteJobCategory", data.result);
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deleteApplicantNat({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteApplicantNat`, payload);
                if (data.statusCode === 200) {
                    commit("deleteApplicantNat", data.result);
                    window.Swal.fire({ title: 'حذف جنسية المتقدم', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف جنسية المتقدم', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deleteApplicantEdu({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteApplicantEdu`, payload);
                if (data.statusCode === 200) {
                    commit("deleteApplicantEdu", data.result);
                    window.Swal.fire({ title: 'حذف المرحلة التعليمية', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف المرحلة التعليمية', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deleteApplicantAge({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteApplicantAge`, payload);
                if (data.statusCode === 200) {
                    commit("deleteApplicantAge", data.result);
                    window.Swal.fire({ title: 'حذف عمر المتقدم', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف عمر المتقدم', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },

    },
    mutations: {
        loading(state, loading_status) {
            state.loading_status = loading_status;
        },
        loading_get(state, loading_get) {
            state.loading_get = loading_get;
        },
        helperObj(state, data) {
            state.helperObj = data;
        },
        deleteJobCategory(state, data) {
            let jobCategories = state.helperObj.jobCategories.filter((item) => item != data);
            state.helperObj.jobCategories = jobCategories;
        },
        deleteApplicantNat(state, data) {
            let applicantNats = state.helperObj.applicantNats.filter((item) => item != data);
            state.helperObj.applicantNats = applicantNats;
        },
        deleteApplicantEdu(state, data) {
            let applicantEdus = state.helperObj.applicantEdus.filter((item) => item != data);
            state.helperObj.applicantEdus = applicantEdus;
        },
        deleteApplicantAge(state, data) {
            let applicantAges = state.helperObj.applicantAges.filter((item) => item != data);
            state.helperObj.applicantAges = applicantAges;
        }
    }
}
