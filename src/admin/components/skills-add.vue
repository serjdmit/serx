<template lang="pug">
    .container
        .container
            .card-block__header
                input(
                    type="text"
                    v-model="skillTitle"
                    @keyup.esc="editMode"
                    @keyup.enter="addSkillGroup"
                    placeholder="Название новой группы"
                ).card-block__input
                .card-block__buttons
                    .buttons-block
                        button(
                            type="button"
                            @click="addSkillGroup"
                        ).buttons-block__button.buttons-block__button--check
                        button(
                            type="button"
                            @click="editMode"
                        ).buttons-block__button.buttons-block__button--remove
        hr.card-line
        .container
            .card-block__body
                table.card-table
                table.add-skill
                    tr.add-skill__row
                        td.add-skill-name
                            input(type="text" placeholder="Новый навык").add-skill-name__input
                        td.add-skill-percents
                            input(type="text" placeholder="100").add-skill-percents__input
                            .add-skill-percents__sign %
                        td.add-skill-button
                            button.add-skill-button__add.add-button
                                .add-icon
                                    .plus-icon +
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            skillTitle: ""
        }
    },
    methods: {
        ...mapActions('categories', ['addNewSkillGroup']),
        async addSkillGroup() {
            try {
                await this.addNewSkillGroup(this.skillTitle);
                this.skillTitle = "";
                this.$emit('closed');
            } catch (error) {
                alert(error.message);
            }
        },
        editMode() {
            this.$emit('closed');
        }
    }
}
</script>


<style lang="postcss" scoped>
    .add-skill {
        opacity: 0.5;
        filter: grayscale(100%);
        pointer-events: none;
        user-select: none;
    }
</style>




