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
            const orientacion = document.querySelector('.wrong-orientation .hero-title__name');
            orientacion.append('Rotate Device');
            setTimeout(() => {
                this.preloading = false;
            }, 500);
        },
        loading(){
            window.onload = this.loaded;
        }
    },
    mounted(){
        this.loading();
    }
});