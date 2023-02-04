import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import TheButton from "./components/TheButton.vue";

createApp(App).component("TheButton", TheButton).use(Toast).mount("#app");
