<template>
    <v-container class="mb-13 py-12">
      <v-layout class="d-flex justify-center">
        <v-flex xs12 sm8 md6>
    
            <h2 class="text-center mb-4">Contact Me</h2>
            <v-form @submit.prevent="submitForm">
      <v-text-field v-model="name" label="Name"></v-text-field>
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-textarea v-model="message" label="Message"></v-textarea>
      
      <v-btn type="submit" color="primary" class="flex mb-4">Submit</v-btn>
    </v-form>
            
    <div class="contact-options mx-4">
      <v-btn text href="https://www.messenger.com/t/100009855578101" @click="contactMessenger" class="mb-4 mr-2">Contact via Messenger</v-btn>
      <v-btn text href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrfTZpDQRtPrhLLWXlFLldXJJxRBzrBLFDPQDrgBKXZTKZjrRSCMdtVQqMcNgVqGbpzQSB" @click="contactGmail" class="mb-4">Contact via Gmail</v-btn>
    </div>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Here you can add your logic to submit the form data
        console.log('Form submitted!');
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Message:', this.message);
        // You can send this data to your backend or use an API service
        // After successful submission, you can show a success message to the user
        // Reset form fields
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  