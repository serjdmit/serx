<template lang="pug">
    .container
        .container
            .card-block__header
                h2.card-block__name {{category.category}}
                // input(type="text" placeholder="Название новой группы" value="Workflow").card-block__input.hidden
                .card-block__buttons
                    .buttons-block
                        button.buttons-block__button.buttons-block__button--change
        hr.card-line
        .container
            .card-block__body
                table.card-table
                    skills-item(
                        v-for="skill in skills"
                        :key="skill.id"
                        :skill="skill"
                    )
                table.add-skill
                    tr.add-skill__row
                        td.add-skill-name
                            input(type="text" placeholder="Новый навык" v-model="skill.title").add-skill-name__input
                        td.add-skill-percents
                            input(type="text" placeholder="100" v-model="skill.percent").add-skill-percents__input
                            .add-skill-percents__sign %
                        td.add-skill-button
                            button(type="button" @click="addNewSkill").add-skill-button__add.add-button
                                .add-icon
                                    .plus-icon +
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props: {
        category: Object,
        skills: Array
    },
    data() {
        return {
            skill: {
                category: this.category.id,
                title: "",
                percent: ""
            }
        }
    },
    components: {
        skillsItem: () => import('components/skills-item')
    },
    methods: {
        ...mapActions('skills', ['addSkill']),
        async addNewSkill() {
            try {
                await this.addSkill(this.skill)
            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>

