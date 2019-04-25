import Vue from 'vue';
import axios from 'axios';
import Flickity from 'vue-flickity';



const thumbs = {
    template: "#slider-thumbs",
    components: {
        Flickity
    },
    props: {
        works: Array,
        currentWork: Object
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        }
    },
    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                cellAlign: 'right'
            }
        }
    }
}

const display = {
    template: "#slider-display",
    components: {
        thumbs
    },
    props: {
        works: Array,
        currentWork: Object
    }
}


const tags = {
    template: "#slider-tags",
    props: {
        currentWork: Object,
    }
}

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    }
}


new Vue ({
    el: "#slider-container",
    template: "#slider-component",
    components: {
        display,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 1
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.loopForWorksSlider(value);
        },
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    methods: {
        loopForWorksSlider(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmount;
        },
        makeArreyWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`; 
                item.photo = requiredPic;

                return item
            });
        },
        handleSlide(direction) {
            switch(direction) {
                case 'next' :
                    this.currentIndex++;
                    break;
                        
                case 'prev' :
                    this.currentIndex--;
                    break;
            }
        },
        selectWork(id){
            this.currentIndex = (id - 1);
        }
    },
    async created() {
        await axios.get('https://webdev-api.loftschool.com/works/134').then(response => {
            this.works = response.data;
            const worksLength = this.works.length;

            for(var i = 0; i <= worksLength; i++){
                let tagsArray = this.works[i].techs.split(',');
                this.works[i].techs = tagsArray;
                this.works[i].id = i + 1;
            }
        });
    }
});