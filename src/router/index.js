import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Project from '../components/Project.vue'
import Resume from '../components/Resume.vue'
import Favorites from '../components/Favorites.vue'
import Achievement from '../components/Achievement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // Generates a separate chunk for About.vue
      component: About
    },
    {
      path: '/resume',
      name: 'resume',
      // Generates a separate chunk for About.vue
      component: Resume
    },
    {
      path: '/favorites',
      name: 'favorites',
      // Generates a separate chunk for About.vue
      component: Favorites
    },
    {
      path: '/achievement',
      name: 'achievement',
      // Generates a separate chunk for About.vue
      component: Achievement
    },
    {
      path: '/contact',
      name: 'contact',
      // Generates a separate chunk for Contact.vue
      component: Contact
    },
    {
      path: '/project',
      name: 'project',
      // Generates a separate chunk for Project.vue
      component: Project
    }
  ]
})

export default router
