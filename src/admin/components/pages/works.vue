<template lang="pug">
    section.page.works-page
        .title-block
            h1.title.title__skills-page Блок "Работы"
        .content-block
            works-add(
                v-if="showAddingForm"
                @closed="handleClose"
            )
                    
            ul.cards-group
                li(@click="showAddingForm = true" v-if="showAddingForm === false").card-block.card-add
                    .add-icon.add-icon--big
                        .plus-icon.plus-icon--big +
                    .card-add__label Добавить работу

                li.card-block.card-block__works
                    .card-block__header
                        img(src="../../../images/works/slider-1.jpg").card-block__preview
                        .tags.tags--absolute
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name HTML
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name CSS
                            .tag.tag--to-left
                                .tag__inner
                                    .tag__name JavaScript
                    .container
                        .card-block__body
                            .container
                                .card-block__name Сайт школы образования
                                .card-block__content(
                                ) Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                a(href="http://loftschool.ru").card-block__link http://loftschool.ru
                                .card-block__edit-block
                                    button.card-block__edit
                                        .card-block__edit-lable Править
                                        .card-block__edit-icon.buttons-block__button
                                    button.card-block__delete
                                        .card-block__edit-lable Удалить
                                        .card-block__edit-icon.card-block__edit-icon--remove.buttons-block__button
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    components: {
        worksAdd: () => import("components/works-add.vue"),
        worksItem: () => import("components/works-item.vue")
    },
    data() {
        return {
            showAddingForm: false
        }
    },
    computed: {
        ...mapState('works', {
            works: state => state.works
        })
    },
    methods: {
        ...mapActions('works', ['fetchWorks']),
        handleClose() {
            this.showAddingForm = false;
        }
    },
    async created() {
        try {
            await this.fetchWorks();
        } catch (error) {
            alert('Произошла ошибка призагрузке категорий');
        }
    }
}
</script>
