import { generateStdError } from "../../helpers/errorHandler";

export default {
    namespaced: true,
    state: {
        reviews: []
    },
    mutations: {
        SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews;
        },
        ADD_REVIEW: (state, newReview) => {
            state.reviews.push(newReview);
        },
        REMOVE_REVIEW: (state, deletedReviewId) => {
            state.reviews = state.reviews.filter(review => review.id !== deletedReviewId);
        },
        EDIT_REVIEW: (state, editedReview) => {
            state.review = state.review.map(review =>
                review.id === editedReview.id ? editedReview : review
            );
        }
    },
    actions: {
        async addNewReview({ commit }, review) {
            try {
                const response = await this.$axios.post("/reviews", review);
                commit("ADD_REVIEW", response.data);
                return response;
            } catch (error) {
                alert(error.message)
            }
        },

        async fetchReviews({ commit }, review) {
            try {
                const response = await this.$axios.get("/reviews/134", review);
                commit("SET_REVIEWS", response.data);
                return response;
            } catch (error) {
                // error handling
            }
        },

        async removeReview({ commit }, reviewId) {
            try {
                const response = await this.$axios.delete(`/reviews/${reviewId}`);
                commit("REMOVE_REVIEW", reviewId);
                return response;
            } catch (error) {
                generateStdError(error);
            }
        },

        async editReview({ commit }, review) {
            try {
                const response = await this.$axios.post(`/reviews/${review.id}`, review.data);
                commit('EDIT_REVIEW', response.data.review);
                return response;
            } catch (error) {
                // error handling
            }
        },

        createReview(store, review) {
            const formData = new FormData();

            formData.append('text', review.desc);
            formData.append('photo', review.photo);

            this.$axios.post('/reviews', formData);
        }
    }
};