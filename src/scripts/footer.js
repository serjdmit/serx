import Vue from 'vue';
import vueScrollto from 'vue-scrollto';

// Vue.use(vueScrollto, {
//     duration
// });

new Vue({
    el: '#footer-component',
    template: '#footer-block',
    data() {
        return {
            items: [],
            socials: []
        }
    },
    created() {
        const itemsData = require('../data/navigation.json');
        const socialsData = require('../data/socials.json');
        this.items = itemsData;
        this.socials = socialsData;
    }
});