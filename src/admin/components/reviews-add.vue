<template lang="pug">
    .card-block.card-block--full-width
        .container
            .container
                .card-block__header
                    .card-block__name Новый отзыв
            hr.card-line
            .container
                .card-block__body.card-block__body--flex-row
                    .card-block__left.card-block__left--content-width
                        .container
                            .upload.upload--avatar
                                label.upload__label.upload__label--avatar
                                    .upload__avatar-wrap
                                        .upload__avatar-filled(
                                            :class="{'filled' : this.rendedPhotoUrl.length}"
                                            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
                                        )
                                        i.fas.fa-user.upload__avatar
                                    .upload__desc.upload__desc--avatar Добавить фото
                                    input(
                                        name="review-avatar"
                                        type="file"
                                        @change="appendFileAndRenderPhoto"
                                    ).upload__input

                    .card-block__right.card-block__right--content-width
                        .container
                            form.card-block__form
                                .card-block__form-header
                                    .card-block__form-field.card-block__form-field--row
                                        label.card-block__label Имя автора
                                        input(type="text" v-model="review.author" placeholder="Имя автора").card-block__input.card-block__input--long
                                    .card-block__form-field.card-block__form-field--row
                                        label.card-block__label Титул автора
                                        input(type="text" v-model="review.occ" placeholder="Титул автора").card-block__input.card-block__input--long
                                .card-block__form-field
                                    label.card-block__label Отзыв
                                    textarea(v-model="review.text").card-block__textarea.card-block__form-buttons
                                .card-block__form-buttons
                                    button.button.button--cancel(
                                        @click="closeForm"
                                    ) Отмена
                                    button.button(@click="addReview" v-if="editmode === false") Сохранить
                                    button.button(@click="save" v-if="editmode === true") Изменить
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
    props: {
        edit: Object
    },
    data() {
        return {
            rendedPhotoUrl: "",
            review: {
                photo: "",
                author: "",
                occ: "",
                text: ""
            },
            editedReview: {...this.edit},
            editmode: false
        };
    },
    methods: {
        appendFileAndRenderPhoto(e) {
            const file = e.target.files[0];
            this.review.photo = file;
            const reader = new FileReader();
            try {
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.rendedPhotoUrl = reader.result;
                };
            } catch (error) {
                alert("sh*t happens :(");
            }
        },
        ...mapActions('reviews', ['addNewReview', 'editReview']),
        closeForm() {
            this.$emit("closed");
        },
        createReviewFormData() {
            const formData = new FormData();
            formData.append("author", this.review.author);
            formData.append("occ", this.review.occ);
            formData.append("text", this.review.text);
            formData.append("photo", this.review.photo);
            return formData;
        },
        async addReview() {
            try {
                const reviewFormData = this.createReviewFormData();
                await this.addNewReview(reviewFormData);
                this.closeForm();
            } catch (error) {
                alert(error.message);
            }
        },
        async save() {
            try {
                // console.log("author " + this.review.author);
                // console.log("occ " + this.review.occ);
                // console.log("text " + this.review.text);
                // console.log("photo " + this.review.photo);
                const reviewData = {
                    id: this.review.id,
                    data: this.createReviewFormData()
                };
                await this.editReview(reviewData);
                this.closeForm();
                this.$emit('edited');
            } catch (error) {
                alert(error.message);
            }
        },
        editReviewMode() {
            if(this.edit.id){
                this.editmode = true;
                this.review = this.edit;
                this.rendedPhotoUrl = axios.defaults.baseURL + this.edit.photo
            } else {
                this.editmode = false;
                this.review = this.edit;
                this.rendedPhotoUrl = axios.defaults.baseURL + this.edit.photo
            };
        }
    },
    created() {
        this.editReviewMode()
    },
    updated() {
        this.editReviewMode()
    }
}
</script>

<style lang="postcss" scoped>
    .upload__avatar-wrap {
        position: relative;
        overflow: hidden;
    }
    .upload__avatar-filled {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: center center no-repeat / cover;
    }
</style>
