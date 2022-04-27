import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./myconfig";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

Vue.use(VueApexCharts);

Vue.component("my-apexchart", VueApexCharts);

const app = initializeApp(firebaseConfig);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
