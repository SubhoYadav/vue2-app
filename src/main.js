import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Registering a global mixin
import { globalMixin } from "./mixins/globalMixin";
Vue.mixin(globalMixin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
