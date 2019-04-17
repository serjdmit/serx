<template lang="pug">
    .card-block.card-block--full-width
        .container
            .container
                .card-block__header
                    .card-block__name Редактирование работы
            hr.card-line
            .card-block__body.card-block__body--flex-row
                .card-block__left
                    .container
                        form.upload
                            label.upload__label
                                .upload__preview-wrap
                                    .upload__preview-filled(
                                        :class="{'filled' : this.rendedPhotoUrl.length}"
                                        :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
                                    )
                                .upload__desc Перетащите или загрузите для загрузки изображения
                                .button.button__upload Загрузить
                                input(
                                    name="work-preview"
                                    type="file"
                                    @change="appendFileAndRenderPhoto"
                                ).upload__input
                .card-block__right
                    .container
                        form.card-block__form
                            .card-block__form-field
                                label.card-block__label Название
                                input(type="text" placeholder="Название работы" v-model="work.title").card-block__input.card-block__input--long
                            .card-block__form-field
                                label.card-block__label Ссылка
                                input(type="text" placeholder="Введите ссылку" v-model="work.link").card-block__input.card-block__input--long
                            .card-block__form-field
                                label.card-block__label Описание
                                textarea(v-model="work.description").card-block__textarea
                            .card-block__form-field
                                label.card-block__label Добавление тега
                                input(type="text" placeholder="Впишите теги через запятую" v-model="work.techs" v-on:input="stringToArray").card-block__input.card-block__input--long
                                .tags
                                    .tag(v-for="(tag, index) in tagsArray" :key="tag.id")
                                        .tag__inner
                                            .tag__name {{tag}}
                                            .tag__remove.buttons-block__button.buttons-block__button--remove(
                                                @click="removeTag(index)"
                                            )
                            .card-block__form-buttons
                                button(
                                    @click="formOpened"
                                ).button.button--cancel Отмена
                                button(
                                    @click="addWork"
                                ).button Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            rendedPhotoUrl: "",
            work: {
                title: "",
                techs: "",
                photo: "",
                link: "",
                description: ""

            },
            tagsArray: []
        };
    },
    methods: {
        appendFileAndRenderPhoto(e) {
            const file = e.target.files[0];
            this.work.photo = file;
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
        ...mapActions('works', ['addNewWork']),
        async addWork() {
            try {
                const response = await this.addNewWork(this.work)
            } catch (error) {
                alert(error.message)
            }
        },
        stringToArray() {
            this.tagsArray = this.work.techs.split(',');
        },
        formOpened() {
            this.$emit("closed");
        },
        removeTag(index) {
            this.tagsArray.splice(index, 1);
            this.work.techs = this.tagsArray.join();
        }
    }
}
</script>

<style lang="postcss" scoped>
    .upload__preview-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
    }
    .upload__preview-filled {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: top center no-repeat / cover;
    }
</style>
