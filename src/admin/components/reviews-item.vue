<template lang="pug">
    .reviews-item
        .card-block__header
            .container
                .container
                    .card-block__header--user
                        .card-block__header-avatar
                            img(:src="baseUrl + review.photo").admin__avatar
                        .card-block__name
                            .card-block__user-name {{ review.author }}
                            .card-block__user-occ {{ review.occ }}
                hr.card-line
        .container
            .card-block__body
                .container
                    .card-block__name Сайт школы образования
                    .card-block__content {{ review.text }}
                    .card-block__edit-block
                        button.card-block__edit(@click="editReview")
                            .card-block__edit-lable Править
                            .card-block__edit-icon.buttons-block__button
                        button.card-block__delete(@click="removeExistedReview")
                            .card-block__edit-lable Удалить
                            .card-block__edit-icon.card-block__edit-icon--remove.buttons-block__button
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    props: {
        review: Object
    },
    data() {
        return {
            editmode: false,
            editedReview: {...this.review},
            baseUrl: axios.defaults.baseURL
        }
    },
    methods: {
        ...mapActions('reviews', ['removeReview']),
        async removeExistedReview() {
            try {
                await this.removeReview(this.review.id);
            } catch (error) {
                alert(error.message)
            }
        },
        
        editReview(event) {
            this.$emit('edit', this.editedReview);
        }
    }
}
</script>

