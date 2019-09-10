import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';

Vue.use(VueWaypoint);

new Vue({
    el: '#about-component',
    template: '#about-block',
    data(){
        return {
            userData: [],
            avatar: Image,
            userName: '',
            greeting: '',
            content: '',
            subContent: '',
            typedContent: '',
            intersectionOptions: {
                root: null,
                rootMargin: '0px 0px 0px 0px',
                thresholds: [0]
            },
            visible: false
        };
    },
    methods: {
        onWaypoint({going}){
            if (going === this.$waypointMap.GOING_IN) {
                this.typeText();
            }
        },
        randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        },
        typeLetter(index) {
            this.typedContent += this.content[index];
            let interval = this.randomNumber(10, 90);
            setTimeout(() => {
                this.typeText();
            }, interval);
            if (this.content === this.typedContent) {
                console.log('asdasd')
                this.visible = true;
            }
        },
        typeText() {
            // let i = 0;
            // while (i < this.content.length) {
            //     setTimeout(() => {
            //         this.typedContent += this.content[i];
            //         console.log(this.typedContent);
            //         i++;
            //     }, 5000);
            // }
            if (this.content !== this.typedContent) {
                this.typeLetter(this.typedContent.length);
            }
        }
    },
    created(){
        const data = require('../data/user-info.json');
        this.userData = data;
        this.avatar = require('../images/content/user.jpg');
        this.userName = "Sergei Dmitrijev";
        this.greeting = 'Hi, my name is';
        this.content = `I'm FRONT-END developer. I was working as web developer in several big and little companies. I'm freelancer too, sometimes`;
        this.subContent = 'If you need front-end developer, we have only one solution ever: CONTACT ME!';
    },
    // mounted() {
    //     this.typeText();
    // }
});