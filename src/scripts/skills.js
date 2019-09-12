import Vue from 'vue';
import axios from 'axios';
import VueWaypoint from 'vue-waypoint';
 
Vue.use(VueWaypoint);


const skill = {
    template: "#skill",
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];

            const dashArrey = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const percents = (dashArrey / 100) * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percents;
        },
        onWaypoint({going}){
            if (going === this.$waypointMap.GOING_IN) {
                this.drawColoredCircle();
            }
        }
    },
    updated() {
        this.drawColoredCircle();
    }
};


const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skills: Array,
        category: Object
    },
    data() {
        return {
            skill: {
                category: this.category.id,
                title: "",
                percent: ""
            },
        };
    }
};


new Vue({
    el: "#skills-component",
    template: "#skills-block",
    components: {
        skillsRow
    },
    data() {
        return {
            categories: [],
            skills: [],
            leftImage: Image,
            waypointed: false,
            intersectionOptions: {
                root: null,
                rootMargin: '2000px 0px 0px 0px',
                thresholds: [0]
            }
        };
    },
    methods: {
        fetchData() {
            axios.get('https://webdev-api.loftschool.com/categories/134').then(response => {
                this.categories = response.data.reverse();
            });
            axios.get('https://webdev-api.loftschool.com/skills/134').then(response => {
                this.skills = response.data;
            });
        },
        filterSkillsByCategoryId(categoryId) {
            return this.skills.filter(skill => skill.category === categoryId);
        }
    },
    created() {
        this.fetchData();
        this.leftImage = require('../images/bg/arms.png');
    }
});