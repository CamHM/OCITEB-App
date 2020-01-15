import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/home/Home.vue";
import Faculties from '../components/faculty/Faculties.vue';
import Faculty from "../components/faculty/Faculty";
import Comparison from "../components/comparison/Comparison";

Vue.use(VueRouter);

export default new VueRouter({

    routes: [
        { path: '/', component: Home },
        { path: '/faculties', name: 'faculties', component: Faculties },
        { path: '/faculties/:faculty', name: 'faculty', component: Faculty},
        { path: '/comparison', name: 'comparison', component: Comparison}
    ]
});