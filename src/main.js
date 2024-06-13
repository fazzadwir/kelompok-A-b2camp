import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/scss/style.scss";
import { convertToRupiah } from 'convert-to-rupiah';

import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(convertToRupiah).use(router);
app.use(createBootstrap({ components: true, directives: true })); // Change this line
app.mount("#app");
