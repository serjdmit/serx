import Vue from 'vue';
import Parallax from 'vue-parallaxy';

new Vue ({
    el: "#parallax-component",
    template: "#parallax-block",
    components: {
        Parallax
    }
});

// new Vue ({
//     el: "#wrapper-bottom-bg",
//     template: "#bottom-wrapper-parallax",
//     components: {
//         Parallax
//     }
// });