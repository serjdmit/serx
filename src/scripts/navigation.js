import Vue from 'vue';
import vueScrollto from 'vue-scrollto';

Vue.use(vueScrollto, {
    duration: 10000
});

let menu = new Vue ({
    el: "#navigation-component",
    template: "#navigation-block",
    data: {
        items: [],
        open: false
    },
    created() {
        const data = require('../data/navigation.json');
        this.items = data;
    },
    methods: {
        toggleActive() {
            hamburger.open = !hamburger.open;
            this.open = hamburger.open;
        }
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

let hamburger = new Vue ({
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