<template>
    <v-container fluid fill-height class="border">
  <v-row align="center" justify="center">
    <v-col cols="12" md="3">
      <v-img class="rounded-circle" src="/public/juns.jpg" aspect-ratio="1" contain></v-img>
    </v-col>
    <v-col cols="12" md="7" class="text-center py-14 my-14 px-14">
      <v-card-text>
        <h1>I AM <span class="text-orange">JUN GIL M. CASQUEJO</span></h1>
      </v-card-text>
      <v-card-text>
        <h2>
          I am a full stack developer with a passion for creating elegant solutions to complex problems.
        </h2>
        <h2>
          My expertise includes front-end and back-end development, as well as database management and
          cloud technologies.
        </h2>
      </v-card-text>
      <!-- Button Container -->
      <div class="social-icons">
        <!-- Facebook -->
        <!-- GitHub -->
        <a href="https://github.com/jungil13" target="_blank" class="social-icon px-2">
          <v-icon size="40">mdi-github</v-icon> <!-- Adjusted icon size for smaller screens -->
        </a>
        <a href="https://www.messenger.com/t/100009855578101" target="_blank" class="social-icon px-2">
          <v-icon size="40">mdi-vuejs</v-icon>
        </a>
        <a href="https://www.messenger.com/t/100009855578101" target="_blank" class="social-icon px-2">
          <v-icon size="40">mdi-language-php</v-icon>
        </a>
        <a href="https://www.messenger.com/t/100009855578101" target="_blank" class="social-icon px-2">
          <v-icon size="40">mdi-language-javascript</v-icon>
        </a>
        <a href="https://www.messenger.com/t/100009855578101" target="_blank" class="social-icon px-2">
          <v-icon size="40">mdi-nodejs</v-icon>
        </a>
        <!-- Add more social media icons here -->
      </div>
    </v-col>
  </v-row>
</v-container>

    <v-container fluid fill-height class="border">
        <Project />
    </v-container>
    <v-container fluid fill-height class="d-flex justify-center border">
        <Contact />
    </v-container>
</template>