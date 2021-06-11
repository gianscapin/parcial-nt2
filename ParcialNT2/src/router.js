import Vue from 'vue';
import VueRouter from 'vue-router';

import FormularioAv from './components/FormularioAv/index.vue';
import Preguntas from './components/Preguntas.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path:'/', component: FormularioAv},
        {path:'/preguntas', component: Preguntas},
    ]
})