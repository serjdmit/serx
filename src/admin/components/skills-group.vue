<template lang="pug">
    .container
        .container
            .card-block__header(v-if="editmode === false")
                h2.card-block__name {{category.category}}
                .card-block__buttons
                    .buttons-block
                        button(
                            @click="editmode = true"
                        ).buttons-block__button.buttons-block__button--change
                        button(
                            @click="removeExistedCategory"
                        ).buttons-block__button.buttons-block__button--delete
            .card-block__header(v-else)
                input(
                    type="text"
                    placeholder="Название группы"
                    v-model="editedCaregory.title"
                    @keyup.enter="save"
                    @keyup.esc="editmode = false"
                ).card-block__input
                .card-block__buttons
                    .buttons-block
                        button(
                            @click="save"
                        ).buttons-block__button.buttons-block__button--check
                        button(
                            @click="editmode = false"
                        ).buttons-block__button.buttons-block__button--remove
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
            },
            editmode: false,
            editedCaregory: {...this.category},
        }
    },
    components: {
        skillsItem: () => import('components/skills-item')
    },
    methods: {
        ...mapActions('skills', ['addSkill']),
        ...mapActions('categories', ['removeCategory', 'editCategory']),
        async addNewSkill() {
            try {
                await this.addSkill(this.skill)
            } catch (error) {
                alert(error.message)
            }
        },
        async removeExistedCategory() {
            try {
                await this.removeCategory(this.category.id);
            } catch (error) {
                alert(error.message)
            }
        },
        async save() {
            try {
                await this.editCategory(this.editedCaregory);
                this.editmode = false;
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>

