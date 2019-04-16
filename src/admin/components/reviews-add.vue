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
                            form.upload.upload--avatar
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
                                        input(type="text" placeholder="Имя автора" value="").card-block__input.card-block__input--long
                                    .card-block__form-field.card-block__form-field--row
                                        label.card-block__label Титул автора
                                        input(type="text" placeholder="Титул автора" value="").card-block__input.card-block__input--long
                                .card-block__form-field
                                    label.card-block__label Отзыв
                                    textarea.card-block__textarea.card-block__form-buttons
                                .card-block__form-buttons
                                    button.button.button--cancel Отмена
                                    button.button Сохранить
</template>
<script>
export default {
    data() {
        return {
            rendedPhotoUrl: "",
            review: {
                desc: "",
                title: "",
                photo: ""
            }
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
        }
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
