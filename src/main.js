import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import TabWrapper from "./components/TabWrapper.vue";
import TabOne from "./components/TabOne.vue";
import TabTwo from "./components/TabTwo.vue";
import "./style.css";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: TabWrapper,
            children: [
                {
                    // use empty string as default view
                    path: "",
                    component: TabOne,
                    alias: "/tab1",
                },
                {
                    path: "/tab2",
                    component: TabTwo,
                },
            ],
        },
    ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
