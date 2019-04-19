<template lang="pug">
    section.page.reviews-page
        .title-block
            h1.title.title__skills-page Блок "Отзывы"
        .content-block
            reviews-add(
                v-if="showAddingForm  || showEditForm"
                @closed="handleClose"
                @edited="afterEdit"
                :edit="editedReview"
            )
            ul.cards-group
                li(
                    @click="addForm"
                    v-if="showAddingForm === false"
                ).card-block.card-add
                    .add-icon.add-icon--big
                        .plus-icon.plus-icon--big +
                    .card-add__label Добавить работу

                li.card-block.card-block__reviews(
                    v-for="review in reviews"
                    :key="review.id"
                )
                    reviews-item(
                        :review="review"
                        @edit="handleEdit"
                    )
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    components: {
        reviewsAdd: () => import("components/reviews-add.vue"),
        reviewsItem: () => import("components/reviews-item.vue")
    },
    data() {
        return {
            showAddingForm: false,
            showEditForm: false,
            editedReview: {},
            editmode: false,
        }
    },
    computed: {
        ...mapState('reviews', {
            reviews: state => state.reviews
        })
    },
    methods: {
        ...mapActions('reviews', ['fetchReviews']),
        handleClose() {
            this.showAddingForm = false;
            this.showEditForm = false;
        },
        handleEdit(editReview) {
            this.showEditForm = true;
            this.showAddingForm = false;
            this.editedReview = editReview;
        },
        addForm() {
            this.showEditForm = false;
            this.showAddingForm = true;
            this.editedReview = {}
        },
        afterEdit() {
            this.fetchReviews()
        }
    },
    async created() {
        try {
            await this.fetchReviews();
        } catch (error) {
            alert('Произошла ошибка призагрузке категорий');
        }
    }
};
</script>


<style lang="postcss" scoped>
    .card-block__user-occ {
        font-size: 16px;
    }
</style>

