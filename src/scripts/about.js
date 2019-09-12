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
            visible: false,
            active: false
        };
    },
    methods: {
        onWaypoint({going}){
            if (going === this.$waypointMap.GOING_IN) {
                this.typeText();
            }
        },
        handleAvatar({going}) {
            if (going === this.$waypointMap.GOING_IN) {
                this.active = true;
            }
        },
        randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        },
        typeLetter(index) {
            this.typedContent += this.content[index];
            let interval = this.randomNumber(3, 20);
            setTimeout(() => {
                this.typeText();
            }, interval);
            if (this.content === this.typedContent) {
                this.visible = true;
            }
        },
        typeText() {
            if (this.content !== this.typedContent) {
                this.typeLetter(this.typedContent.length);
            }
        }
    },
    created(){
        const data = require('../data/user-info.json');
        this.userData = data;
        this.avatar = require('../images/content/user.png');
        this.greeting = 'Hi, my name is';
        this.userName = "Sergei Dmitrijev";
        this.content = `
            The story of my criminal life as a developer goes back to the distant past.
            I worked on the front end for a long time, until they began to suspect me of petty projects.
            I had to go underground, into the world of backend.
            After some time, I decided to go to lie low and go to the IT-monastery, where the best gurus taught me programming skills.
            It's time to stop hiding from the law of development and come into the world of front-end with renewed vigor!
        `;
        this.subContent = `To start doing something, just start doing something. Let's do it, take your chance!`;
    },
    // mounted() {
    //     this.typeText();
    // }
});