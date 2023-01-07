import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import dashboard from "./components/dashboard.vue";
import sponser from "./components/sponser.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/dashboard",
            component: dashboard,
        },
        {
            path: "/sponser",
            component: sponser,
            alias: '/'
        },
    ],
})
