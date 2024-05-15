/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */
import { createApp } from 'vue'; // Import createApp from Vue
import App from './App.vue'; // Import the root component
import router from './router'; // Import the router instance
import { registerPlugins } from '@/plugins'; // Import other plugins if needed

// Create the Vue app instance
const app = createApp(App);

// Register any other plugins you have
registerPlugins(app);

// Use Vue Router
app.use(router);

// Mount the app on the DOM element with id "app"
app.mount('#app');
