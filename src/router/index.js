import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import testlayout from '@/layout/testlayout'
import binlayout from '@/layout/binlayout'


import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import testRegister from "../views/testRegister.vue";
import testLogin from "../views/testLogin.vue";
import Bin from "../views/Bin.vue";
import Settings from "../views/Settings.vue";
import AboutService from "../views/AboutService.vue";


const routes = [
  {
    path: "/",
    redirect: "/testLogin",
    component: DashboardLayout,
    children: [

      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons },
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
  
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
  {
    path: "/",
    redirect: "testRegister",
    component: testlayout,
    children:[
      
        {
          path: "/testRegister",
          name: "testRegister",
          components: { default: testRegister },
        },
        {
          path: "/testLogin",
          name: "testLogin",
          components: { default: testLogin },
        },
    ]
  },
  
  {
    path: "/",
    redirect: "Bin",
    component: binlayout,
    children:[
      {
        path: "/Bin",
        name: "Bin",
        components: {default : Bin},
      },
      {
        path: "/Settings",
        name: "Settings",
        components: {default : Settings},
      },
      {
        path: "/AboutService",
        name: "AboutService",
        components: {default : AboutService},
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;

