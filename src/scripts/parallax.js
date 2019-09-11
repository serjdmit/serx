import Vue from 'vue';
import Parallax from 'vue-parallaxy';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vue2TouchEvents);

new Vue ({
    el: "#parallax-component",
    template: "#parallax-block",
    components: {
        Parallax,
        Vue2TouchEvents
    },
    methods: {
        swipeHandler(direction) {
            console.log('alal');
        }
    }
});

// new Vue ({
//     el: "#wrapper-bottom-bg",
//     template: "#bottom-wrapper-parallax",
//     components: {
//         Parallax
//     }
// });