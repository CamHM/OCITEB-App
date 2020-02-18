import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/home/Home.vue";
import Faculties from '../components/faculty/Faculties.vue';
import Faculty from "../components/faculty/Faculty";
import Comparison from "../components/comparison/Comparison";
const  GraphCards = () => import( "../components/graph/DefaultContainer");
const GraphVisualizer = () => import("../components/graph/GraphVisualizer");

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/faculties', name: 'faculties', component: Faculties },
        { path: '/faculties/:faculty', name: 'faculty', component: Faculty},
        { path: '/comparison', name: 'comparison', component: Comparison},
        {path: '/graph', name: 'graph', component: GraphCards},
        {path: "/visualizeGraph/:nodeID", name: "visualizer", component: GraphVisualizer}
    ]
});