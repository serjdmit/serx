import Vue from 'vue';

let menu = new Vue ({
    el: "#navigation-component",
    template: "#navigation-block",
    data: {
        items: [],
        isActive: false
    },
    // methods: {
    //     toggleActive() {
    //         this.isActive = false
    //     }
    // },
    created() {
        const data = require('../data/navigation.json');
        this.items = data;
    }
});

new Vue ({
    el: "#nav-button",
    template: "#nav-hamburger",
    data :{
        isActive: false
    },
    methods: {
        toggleActive() {
            menu.isActive = !menu.isActive;
            this.isActive = menu.isActive;
        }
    }
});