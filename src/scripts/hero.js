import Vue from 'vue';
import VueDragscroll from 'vue-dragscroll';
import vueScrollto from 'vue-scrollto';

Vue.use(VueDragscroll);

Vue.use(vueScrollto, {
    duration:1500,
    easing: 'ease-in-out'
});

let hero_menu = {
    template: "#menu",
    props: {
        items: Array,
        menu: true
    }
};

const socials = {
    template: "#socials",
    props: {
        socials: Array
    }
};

const hamburger ={
    template: "#hamburger",
    props: {
        menu: false
    }
};

const scroll = {
    template: '#scroll'
};

new Vue({
    el: '#hero-component',
    template: '#hero-block',
    components: {
        hero_menu,
        socials,
        hamburger,
        scroll
    },
    data(){
        return {
            items: [],
            socials: [],
            menu: false
        }
    },
    methods: {
        handleMenu() {
            this.menu = !this.menu
        },
        handleSwipe(direction){
            console.log(direction);
        }
    },
    created() {
        const nav = require('../data/navigation.json');
        this.items = nav;
        const socials = require('../data/socials.json');
        this.socials = socials;
    }
});