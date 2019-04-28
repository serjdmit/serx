<template lang="pug">
    .work-item
        .card-block__header
            img(:src="baseUrl + work.photo").card-block__preview
            .tags.tags--absolute
                .tag.tag--to-left(v-for="tag in tags" :key="tag.id")
                    .tag__inner
                        .tag__name {{ tag }}
        
        .container.flex-container
            .card-block__body
                .container
                    .card-block__name {{ work.title }}
                    .card-block__content {{ work    .description }}
                    a(:href="work.link").card-block__link {{ work.link }}
                .container
                    .card-block__edit-block
                        button.card-block__edit(@click="editWork")
                            .card-block__edit-lable Править
                            .card-block__edit-icon.buttons-block__button
                        button.card-block__delete(@click="removeExistedWork")
                            .card-block__edit-lable Удалить
                            .card-block__edit-icon.card-block__edit-icon--remove.buttons-block__button
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
    props: {
        work: Object
    },
    data() {
        return {
            editedWork: {...this.work},
            baseUrl: axios.defaults.baseURL,
            tags: []
        }
    },
    methods: {
        ...mapActions('works', ['removeWork']),
        async removeExistedWork() {
            try {
                await this.removeWork(this.work.id);
            } catch (error) {
                alert(error.message)
            }
        },
        
        editWork(event) {
            this.$emit('edit', this.editedWork);
        },

        stringToArray() {
            this.tags = this.work.techs.split(',');
        }
    },
    mounted() {
        this.stringToArray()
    }
}
</script>
<style lang="postcss" scoped>
    .card-block__header {
        display: block;
        height: 200px;
    }
    .work-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-block__preview {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
</style>
