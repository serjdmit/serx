import Vue from 'vue';
import VScrollLock from 'v-scroll-lock';

Vue.use(VScrollLock);



let menu = new Vue ({
    el: "#navigation-component",
    template: "#navigation-block",
    data: {
        items: [],
        open: false
    },
    // methods: {
    //     openModal () {
    //         this.open = true
    //     },
    //     closeModal () {
    //         this.open = false
    //     }
    // },
    created() {
        const data = require('../data/navigation.json');
        this.items = data;
    }
});

new Vue ({
    el: "#socials-component",
    template: "#socials-block",
    created() {
        const data = require('../data/socials.json');
        this.socials = data;
    }
});

new Vue ({
    el: "#nav-button",
    template: "#nav-hamburger",
    data :{
        open: false
    },
    methods: {
        toggleActive() {
            menu.open = !menu.open;
            this.open = menu.open;


        }
    }
});