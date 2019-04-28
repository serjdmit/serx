<template lang="pug">
    section.page.works-page
        .title-block
            h1.title.title__skills-page Блок "Работы"
        .content-block
            works-add(
                v-if="showAddingForm  || showEditForm"
                @closed="handleClose"
                @edited="afterEdit"
                :edit="editedWork"
            )
                    
            ul.cards-group
                li(
                    @click="addForm"
                    v-if="showAddingForm === false"
                ).card-block.card-add
                    .add-icon.add-icon--big
                        .plus-icon.plus-icon--big +
                    .card-add__label Добавить работу

                li.card-block.card-block__works(
                    v-for="work in works"
                    :key="work.id"
                )
                    works-item(
                        :work="work"
                        @edit="handleEdit"
                    )
                    
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
            showAddingForm: false,
            showEditForm: false,
            editedWork: {},
            editmode: false,
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
            this.showEditForm = false;
        },
        handleEdit(editWork) {
            this.showEditForm = true;
            this.showAddingForm = false;
            this.editedWork = editWork;
        },
        addForm() {
            this.showEditForm = false;
            this.showAddingForm = true;
            this.editedWork = {}
        },
        afterEdit() {
            this.fetchWorks()
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
<style lang="postcss" scoped>
    .card-block {
        min-height: none;
    }
</style>

