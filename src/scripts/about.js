import Vue from 'vue';

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
            subContent: ''
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
    }
});