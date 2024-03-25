import { createApp } from "vue";
import App from "./App.vue";

import PlayCard from "./components/PlayCard.vue";

const app = createApp(App);

app.component("play-card", PlayCard);
app.mount("#app");
