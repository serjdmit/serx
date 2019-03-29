import Vue from 'vue';

new Vue({
    el: "#message-component",
    template: "#message-block",
    data: {
        nameActive: false,
        nameFilled: "",

        emailActive: false,
        emailFilled: "",

        messageActive: false,
        messageFilled: ""
    },
    methods: {
        toggleName() {
            this.nameActive = !this.nameActive;
            if (this.nameFilled !== "") {
                this.nameActive = true;
            }
        },
        toggleEmail() {
            this.emailActive = !this.emailActive;
            if (this.emailFilled !== "") {
                this.emailActive = true;
            }
        },
        toggleMessage() {
            this.messageActive = !this.messageActive;
            if (this.messageFilled !== "") {
                this.messageActive = true;
            }
        }
    }
});