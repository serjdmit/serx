import Vue from 'vue';
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

new Vue({
    el: "#message-component",
    template: "#message-block",
    
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
        form: {
            firstName: null,
            email: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
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
            this.form.firstName = null;
            this.form.email = null;
            this.form.message = null;
        },
        saveUser() {
            this.sending = true;

            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
                this.lastUser = `${this.form.firstName} ${this.form.email}`;
                this.userSaved = true;
                this.sending = false;
                this.clearForm();
            }, 1500);
        },
        validateUser() {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                this.saveUser();
            }
        }
    }
});