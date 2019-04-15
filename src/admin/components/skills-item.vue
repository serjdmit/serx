<template lang="pug">
    tr(v-if="editmode === false").card-table__row.skills-row
        td.card-table__cell.card-table__cell--name
            .card-cell-label {{skill.title}}
        td.card-table__cell.card-table__cell--percents
            .card-cell-label {{skill.percent}}
        td.card-table__cell.card-table__cell--percents-sign %
        td.card-table__cell.card-table__cell--buttons
            .buttons-block
                button(
                    @click="editmode = true"
                ).buttons-block__button.buttons-block__button--change
                button(
                    @click="removeExistedSkill"
                ).buttons-block__button.buttons-block__button--delete
    tr(v-else).card-table__row
        td.card-table__cell.card-table__cell--name
            input(type="text" v-model="editedSkill.title" placeholder="Навык").card-cell-input
        td.card-table__cell.card-table__cell--percents.skill-percents
            input(type="text" v-model="editedSkill.percent" placeholder="100").card-cell-input
        td.card-table__cell.card-table__cell--percents-sign %
        td.card-table__cell.card-table__cell--buttons
            .buttons-block
                button(
                    @click="save"
                ).buttons-block__button.buttons-block__button--check
                button(
                    @click="editmode = false"
                ).buttons-block__button.buttons-block__button--remove
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props: {
        skill: Object
    },
    data() {
        return {
            editmode: false,
            editedSkill: {...this.skill}
        }
    },
    methods: {
        ...mapActions('skills', ['removeSkill', 'editSkill']),
        async removeExistedSkill() {
            try {
                await this.removeSkill(this.skill.id);
            } catch (error) {
                alert(error.message)
            }
        },
        async save() {
            try {
                await this.editSkill(this.editedSkill);
                this.editmode = false;
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>

