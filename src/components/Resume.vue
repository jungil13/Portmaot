<template>
    <v-container>
      <!-- Personal Information -->
      <v-card class="mb-4" id="personal-info">
        <v-card-title>Personal Information</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <p><strong>Name:</strong> Jun Gil M. Casquejo</p>
              <p><strong>Email:</strong> jungilcasquejo5@gmail.com</p>
              <p><strong>Phone:</strong> +639568692103</p>
            </v-col>
            <v-col cols="12" sm="6">
              <p><strong>Address:</strong> Poblacion, Cordova, Cebu</p>
              <p><strong>Facebook:</strong> https://web.facebook.com/jungil.casquejo30</p>
              <p><strong>GitHub:</strong>https://github.com/jungil13</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  
      <!-- Education -->
      <v-card class="mb-4" id="education">
        <v-card-title>Education</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Cordova Public College</v-list-item-title>
                <v-list-item-subtitle>Bachelor of Science in Computer Science</v-list-item-subtitle>
                <v-list-item-subtitle>UnderGraduate</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
  
      <!-- Work Experience -->
      <v-card class="mb-4" id="work-experience">
        <v-card-title>Work Experience</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Software Engineer</v-list-item-title>
                <v-list-item-subtitle>Company XYZ</v-list-item-subtitle>
                <v-list-item-subtitle>June 20XX - Present</v-list-item-subtitle>
                <v-list-item-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
  
      <!-- Skills -->
      <v-card class="mb-4" id="skills">
        <v-card-title>Skills</v-card-title>
        <v-card-text>
          <v-chip-group>    
            <v-chip>Vue.js</v-chip>
            <v-chip>Vuetify</v-chip>
            <v-chip>Node.js</v-chip>
            <v-chip>Express.js</v-chip>
            <v-chip>SQL</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
  
      <!-- Hobbies -->
      <v-card class="mb-4" id="hobbies">
        <v-card-title>Hobbies</v-card-title>
        <v-card-text>
          <v-chip-group>
            <v-chip>Reading</v-chip>
            <v-chip>Traveling</v-chip>
            <v-chip>Biking</v-chip>
            <v-chip>Cooking</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    // Add your script logic here if needed
  }
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  @media print {
    #personal-info,
    #education,
    #work-experience,
    #skills,
    #hobbies {
      page-break-inside: avoid;
      break-inside: avoid;
      break-before: auto;
    }
  }
  </style>
  