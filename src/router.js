import { createWebHistory, createRouter } from "vue-router";
import AddData from "./components/AddData";
import DelData from "./components/DelData";
import UpdateData from "./components/UpdateData";
import ViewData from "./components/ViewData";
import DataContainer from "./components/DataContainer"

const routes = [
    {
        path: "/",
        name: "Home",
        component: DataContainer,
    },
    {
        path: "/addData",
        name: "add",
        component: AddData,
    },
    {
        path: "/delData",
        name: "remove",
        component: DelData,
    },
    {
        path: "/updateData",
        name: "update",
        component: UpdateData,
    },
    {
        path: "/viewData",
        name: "view",
        component: ViewData,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;