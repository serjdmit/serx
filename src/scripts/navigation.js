import Vue from 'vue';

new Vue ({
    el: "#navigation-component",
    template: "#navigation-block",
    data() {
        return {
            items: []
        }
    },
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
            this.isActive = !this.isActive
        }
    }
});