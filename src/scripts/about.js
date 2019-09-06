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
        this.content = `Now and always I'm working on my skills. With changing and compare some things of my life, through all troubler, I always find a better way. This is endless way, fortunately :)`;
        this.subContent = 'Growing up, making changes, fast studying, creativity and communication are my best sides.'
    }
});