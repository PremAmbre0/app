import Vue from "vue";
import VueRouter from "vue-router";
import TheClock from  "../components/TheClock.vue";
import RippleButton from "../components/RippleButton.vue";
import Notification from "../components/Notification.vue";
import ProgressBar from "../components/ProgressBar.vue";
import VerticalSlider from "../components/VerticalSlider.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/clock",
    name:"clock",
    component: TheClock
  },
  {
    path:"/ripple-button",
    name:"ripple-button",
    component:RippleButton
  },
  {
    path:"/notification",
    name:"notification",
    component:Notification
  },
  {
    path:"/progress-bar",
    name:"progress-bar",
    component:ProgressBar
  },
  {
    path:"/vertical-slider",
    name:"vertical-slider",
    component:VerticalSlider
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
