import Vue from 'vue';
import axios from 'axios';


const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillPercents: Number
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];

            const dashArrey = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const percents = (dashArrey / 100) * (100 - this.skillPercents);
            circle.style.strokeDashoffset = percents;
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
}


const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skill: Object
    }
}


new Vue({
    el: "#skills-component",
    template: "#skills-block",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: [],
            // posts: []
        }
    },
    methods: {
        fetchData() {
            axios.get('https://webdev-api.loftschool.com/categories/134').then(response => {
                this.skills = response.data;
                console.log(this.skills[0]);
            });
        }
    },
    created() {
        // const data = require("../data/skills.json");
        // this.skills = data;
        this.fetchData();
    }
})