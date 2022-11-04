import { createApp } from "vue";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App.vue";
import router from "./routes";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(router);
app.mount("#app");
