<template lang="pug">
    section.page.reviews-page
        .title-block
            h1.title.title__skills-page Блок "Отзывы"
        .content-block
            reviews-add(
                v-if="showAddingForm"
                @closed="handleClose"
            )
            ul.cards-group
                li(@click="showAddingForm = true" v-if="showAddingForm === false").card-block.card-add
                    .add-icon.add-icon--big
                        .plus-icon.plus-icon--big +
                    .card-add__label Добавить работу

                li.card-block.card-block__works(
                    v-for="review in reviews"
                    :key="review.id"
                )
                    reviews-item(
                        :review="review"
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
            showAddingForm: false
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

