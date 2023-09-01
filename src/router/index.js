import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login/login.vue";
import Register from "../views/register/Register.vue";
import Profil from "../views/Profil/Profil.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import ProfilEdit from "../views/DashboardEdit/DashboardEdit.vue";
import Stipendiya from "../views/Stipendiya/Stipendiya.vue";
import Hujjatlar from "../views/Hujjatlar/Hujjatlar.vue";
import Home from "../views/Home/Home.vue";
import Reyting from "../views/Reyting/Reyting.vue";
import About from "../views/About/About.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Homee",
    component: Home,
  },
  {
    path: "/academy",
    name: "AboutAcademy",
    component: About,
  },
  {
    path: "/reyting",
    name: "Reyting",
    component: Reyting,
  },
  {
    path: "/register",
    name: "Registratsiya",
    component: Register,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/user/profil/edit",
    name: "ProfilEdit",
    component: ProfilEdit,
  },
  {
    path: "/user/scholarship",
    name: "Stipendiya",
    component: Stipendiya,
  },
  {
    path: "/user/document",
    name: "Hujjatlar",
    component: Hujjatlar,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
