<template lang="pug">
    button(
        v-if="elem === 'button'"
        v-on="$listeners"
        :class="{'disabled' : disabled}"
        :disabled="disabled"
    ).default-btn-container.btn-decorator {{text}}


    .btn-file-container(
        v-else-if="elem === 'file'"
    )
        .btn-file-fake.btn-decorator {{text}}
        input(
            type="file"
            v-on="$listeners"
        ).btn-file-input
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Отправить"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            elem: {
                type: String,
                default: "button",
                validator: value => ["button", "file"].includes(value)
            }
        }
    };
</script>