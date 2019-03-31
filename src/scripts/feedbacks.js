import Vue from 'vue';
import Flickity from 'vue-flickity';

let feedSlider = new Vue({
    el: '#feedbacks-component',
    template: '#feedbacks-block',
    components: {
        Flickity
    },
    data: {
        feedbacks: [],
        flickityOptions: {
            initialIndex: 1,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            cellAlign: 'left'
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.feedbacks = data;
    }
});

new Vue({
    el: '#reviews-component',
    template: '#reviews-block',
    methods: {
        next() {
            feedSlider.$refs.flickity.next();
        },
        
        previous() {
            feedSlider.$refs.flickity.previous();
        }
    }
});