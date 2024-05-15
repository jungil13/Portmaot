<template>
    <v-card
      class="mx-auto  mb-12 py-10"
      max-width="600"
    >
      <v-img
        height="400px"
        src="/ach.jpg"
        cover
      ></v-img>
  
      <v-card-title>
       Computer System Servicing
      </v-card-title>
  
      <v-card-subtitle>
       NC II
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          text="Explore"
        ></v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique nemo esse perferendis, necessitatibus sunt nulla temporibus mollitia a consectetur cum sint accusantium, qui totam voluptatibus ratione rem blanditiis. Pariatur.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    
  </template>
  <script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>