import "./assets/main.css";

import { createApp } from "vue";
import { createYmaps } from "vue-yandex-maps";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const ymaps = createYmaps({
  apikey: import.meta.env.VITE_YANDEX_API,
});

app.use(router);
app.use(ymaps);

app.mount("#app");
