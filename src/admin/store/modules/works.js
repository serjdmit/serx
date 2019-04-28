import { generateStdError } from "../../helpers/errorHandler";

export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {
        SET_WORKS: (state, works) => {
            state.works = works;
        },
        ADD_WORK: (state, newWork) => {
            state.works.push(newWork);
        },
        REMOVE_WORK: (state, deletedWorkId) => {
            state.works = state.works.filter(work => work.id !== deletedWorkId);
        },
        EDIT_WORK: (state, editedWork) => {
            state.work = state.work.map(work =>
                work.id === editedWork.id ? editedWork : work
            );
        }
    },
    actions: {
        async addNewWork({ commit }, work) {
            try {
                const response = await this.$axios.post("/works", work);
                commit("ADD_WORK", response.data);
                return response;
            } catch (error) {
                alert(error.message)
            }
        },

        async fetchWorks({ commit }, work) {
            try {
                const response = await this.$axios.get("/works/134", work);
                commit("SET_WORKS", response.data);
                return response;
            } catch (error) {
                // error handling
            }
        },

        async removeWork({ commit }, workId) {
            try {
                const response = await this.$axios.delete(`/works/${workId}`);
                commit("REMOVE_WORK", workId);
                return response;
            } catch (error) {
                generateStdError(error);
            }
        },

        async editWork({ commit }, work) {
            try {
                const response = await this.$axios.post(`/works/${work.id}`, work);
                commit('EDIT_WORK', response.data.work);
                return response;
            } catch (error) {
                // error handling
            }
        },

        createWork(store, work) {
            const formData = new FormData();

            formData.append('text', work.desc);
            formData.append('photo', work.photo);

            this.$axios.post('/works', formData);
        }
    }
};