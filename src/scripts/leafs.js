import Vue from 'vue';

new Vue({
    el: '#leafs-component',
    template: '#leafs-block',
    data(){
        return {
            leafs: []
        }
    },
    created() {
        this.leafs.push(require('../images/leafs/1.png'));
        this.leafs.push(require('../images/leafs/2.png'));
        this.leafs.push(require('../images/leafs/3.png'));
        this.leafs.push(require('../images/leafs/4.png'));
    }
});