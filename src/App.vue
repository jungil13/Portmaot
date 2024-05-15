<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const drawer = ref(false);
const route = useRoute();

const navigationItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'About', to: '/about', icon: 'mdi-information' },
  { title: 'Projects', to: '/project', icon: 'mdi-briefcase' },
  { title: 'Resume', to: '/resume', icon: 'mdi-file-account' },
  { title: 'Favorites', to: '/favorites', icon: 'mdi-book-heart' },
  { title: 'achievement', to: '/achievement', icon: 'mdi-trophy' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' }
];

const icons = [
'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
];
</script>

<template>
  <v-app class="">
    <v-app-bar app>
      <img src="/logo.png" alt="Logo" width="100"  height="50" class="logo ml-14">
      <v-toolbar-title :to="{ path: '/' }" class="cursor-pointer mr-2">
      ||  J U N G I L
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn to="/resume" class="mr">
        Resume
      </v-btn>
      <v-btn to="/" class="mr-2">
        Home
      </v-btn>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="(item, index) in navigationItems" :key="index" :to="item.to">
          <v-list-item-content>
            <v-row align="center">
              <v-col cols="auto">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </v-col>
              <v-col cols="auto">
                <v-list-item-title class="font-bold" style="font-family: system-ui; font-size: 16px;">{{ item.title }}</v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Your main content here -->
      <!-- For demonstration purpose, let's show a simple message -->
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="d-flex flex-column">
    <div class="bg-orange d-flex w-100 justify-center px-4 mb-4">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-1 grey-darken-2 transparent text-center w-100 mb-2">
      {{ new Date().getFullYear() }} — <strong>J U N G I L</strong>
    </div>
    <div>
    
    <v-btn to="about/" class="mr-2">
      About
    </v-btn>
    <v-btn to="/contact" class="">
      Contact
    </v-btn>
    <v-btn to="/project" class="mr">
      Projects
    </v-btn>
  </div>
  </v-footer>
  </v-app>
</template>
