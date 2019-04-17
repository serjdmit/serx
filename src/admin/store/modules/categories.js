export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories;
        },
        ADD_CATEGORY: (state, newCategory) => {
            state.categories.push(newCategory);
        },
        REMOVE_CATEGORY: (state, deleteCategoryId) => {
            state.categories = state.categories.filter(category => category.id !== deleteCategoryId);
        },
        EDIT_CATEGORY: (state, editedCategory) => {
            state.categories = state.categories.map(category =>
                category.id === editedCategory.id ? editedCategory : category
            );
        }
    },
    actions: {
        async addNewSkillGroup({ commit }, groupTitle) {
            try {
                const response = await this.$axios.post("/categories", {
                    title: groupTitle
                });
                commit("ADD_CATEGORY", response.data)
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        async fetchCategories({ commit }) {
            try {
                const response = await this.$axios.get("/categories");
                commit("SET_CATEGORIES", response.data);
                return response;
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        // async addNewSkillGroup(store, groupTitle) {
        //     try {
        //         const response = await this.$axios.post('/categories', {

        //         });
        //         return response
        //     } catch (error) {
        //         throw new Error(
        //             error.response.data.error || error.response.data.message
        //         );
        //     }
        // },
        async removeCategory( { commit }, categoryId){
            try {
                const response = await this.$axios.delete(`/categories/${categoryId}`);
                commit('REMOVE_CATEGORY', categoryId);
                return response;
            } catch (error) {
                alert(error.message);
            }
        },
        async editCategory({ commit }, category) {
            try {
                const response = await this.$axios.post(`/categories/${category.id}`, category);
                commit('EDIT_CATEGORY', response.data.category);
                return response;
            } catch (error) {
                alert(error.message);
            }
        }
    }
};