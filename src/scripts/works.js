import Vue from 'vue';



const thumbs = {
    template: "#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
}
const btns = {
    template: "#slider-btns"
}

const display = {
    template: "#slider-display",
    components: {
        thumbs,
        btns
    },
    props: {
        works: Array,
        currentWork: Object
    }
}


const tags = {
    template: "#slider-tags",
    props: {
        tagsArray: Array
    }
}

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    }, 
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(',');
        }
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
            currentIndex: 0
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
                const requiredPic = require(`../images/works/${item.photo}`); 
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
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArreyWithRequiredImages(data);
    }
});
