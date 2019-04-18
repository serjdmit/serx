import Vue from 'vue';
import axios from 'axios';
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
    methods: {
        fetchData() {
            axios.get('https://webdev-api.loftschool.com/reviews/134').then(response => {
                this.feedbacks = response.data;
            });
        },
    },
    created() {
        this.fetchData()
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
        },
    }
});