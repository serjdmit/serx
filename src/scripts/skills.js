import Vue from 'vue';




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
            skills: {}
        }
    },
    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }
})