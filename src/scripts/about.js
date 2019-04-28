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
        this.userName = "Сергей Дмитриев";
        this.greeting = 'Привет, меня зовут';
        this.content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus atque adipisci velit necessitatibus dolorem corporis vero neque impedit non amet!'
        this.subContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti, fuga dignissimos at officia non tempora similique esse repudiandae numquam.'
    }
});