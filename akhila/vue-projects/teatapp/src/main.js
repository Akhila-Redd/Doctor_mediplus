// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router';


// const app=createApp(App);
// app.use(router)
// app.mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Correct path to your router

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');
