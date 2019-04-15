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
                li.card-block.card-block__skills(
                    v-for="category in categories"
                    :key="category.id"
                )
                    skills-group(
                        :category="category"
                        :skills="filterSkillsByCategoryId(category.id)"
                    )
</template>

<script>
import { mapActions, mapState } from "vuex";
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
    computed: {
        ...mapState('categories', {
            categories: state => state.categories
        }),
        ...mapState('skills', {
            skills: state => state.skills
        })
    },
    methods: {
        ...mapActions('categories', ['fetchCategories']),
        ...mapActions('skills', ['fetchSkills']),
        filterSkillsByCategoryId(categoryId) {
            return this.skills.filter(skill => skill.category === categoryId);
        }
    },
    async created() {
        try {
            await this.fetchCategories();
        } catch (error) {
            alert('Произошла ошибка призагрузке категорий');
        }
        try {
            await this.fetchSkills();
        } catch (error) {
            alert('Произошла ошибка при загрузке скиллов');
        }
    }
}
</script>