import Vue from 'vue';
import {OrbitSpinner} from 'epic-spinners';

import 'vue-loading-overlay/dist/vue-loading.css';

new Vue({
    el: '#preloader-component',
    template: '#preloader',
    components: {
        OrbitSpinner
    },
    data(){
        return {
            preloading: true,
            doneClass: false
        };
    },
    methods: {
        loaded(){
            this.doneClass = true;
            setTimeout(() => {
                this.preloading = false;
            }, 1500);
        },
        loading(){
            window.onload = this.loaded;
        }
    },
    mounted(){
        this.loading();
    }
});