import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMaterial from 'vue-material';
import { validationMixin } from 'vuelidate';
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(VueMaterial);
Vue.use(VueAxios, axios);

new Vue({
    el: "#message-component",
    template: "#message-block",
    
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
        form: {
            firstName: '',
            email: '',
            message: ''
        },
        messageSended: false,
        sending: false,
        lastMessage: null
    }),
    validations: {
        form: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            message: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(300)
            },
        }
    },
    methods: {
        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName];

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                };
            }
        },
        clearForm() {
            this.$v.$reset();
            this.form.firstName = '';
            this.form.email = '';
            this.form.message = '';
            setTimeout(() => {
                this.messageSended = false;
            }, 10000);
        },
        sendMessage() {
            const field = this.$v.form[fieldName];

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                };
            }
            this.sending = true;

            axios.post('https://formcarry.com/s/dFrMZ5OGGZj', {
                name: this.form.firstName,
                email: this.form.email,
                message: this.form.message
            }, { headers: { 'Accept': 'application/json' } })
            .then((response) => {
                console.log(response);
            })
            .then(() => {
                this.lastMessage = `Thank you, ${this.form.firstName} ;)`;
                this.messageSended = true;
                this.sending = false;
                this.clearForm();
            })
            .catch((error) => {
                console.log(error);
                this.lastMessage = `Oops, something went wrong :(`;
                this.sending = false;
            });
        },
        validateUser() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                this.sendMessage();
            }
        }
    }
});