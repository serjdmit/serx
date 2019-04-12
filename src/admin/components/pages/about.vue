<template lang="pug">
    section.page.skills-page
        .title-block
            h1.title.title__skills-page Блок "Обо мне"
            button(
                @click="showAddingForm = true"
                v-if="showAddingForm === false"
            ).add-skills-group
                .add-icon.add-icon__title
                    .plus-icon.plus-icon--small +
                .add-button__title Добавить группу
        .content-block
            ul.cards-group
                li.card-block.card-block__skills(v-if="showAddingForm")
                    skills-add()
                li.card-block.card-block__skills(v-if="false")
                    skills-group()
</template>

<script>
import { mapActions } from "vuex";
export default {
    components: {
        skillsAdd: () => import('components/skills-add.vue'),
        skillsGroup: () => import('components/skills-group.vue')
    },
    data() {
        return {
            showAddingForm: false
        }
    },
    methods: {
        ...mapActions('categories', ['fetchCategories'])
    },
    created() {
        try {
            this.fetchCategories();
        } catch (error) {
            alert('Произошла ошибка');
        }
    }
}
</script>