import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/home/Home.vue";
import Faculties from '../components/faculty/Faculties.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/faculties', component: Faculties }
    ]
});