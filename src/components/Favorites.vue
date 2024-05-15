<template>
    <v-container class="my-2">
        <v-text-field v-model="searchQuery" label="Search Tracks" @keyup.enter="searchTracks"></v-text-field>
      <v-row>
        <v-col v-for="(track, index) in tracks" :key="index" cols="12">
          <v-card>
            <v-card-title>{{ track.name }}</v-card-title>
            <v-card-text>
              <v-img :src="track.album.images[0].url" alt="Album Cover" height="200"></v-img>
              <v-btn @click="playTrack(track)">Play</v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn :href="track.external_urls.spotify" target="_blank">Open in Spotify</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2hCKt8ynEu958dKHW0jTV4?utm_source=generator" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/7tNO3vJC9zlHy2IJOx34ga?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        tracks: [],
        currentTrackUrl: '', // Stores the URL of the currently selected track
        accessToken: ''
      };
    },
    created() {
      this.getAccessToken();
    },
    methods: {
      async getAccessToken() {
        try {
          const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('d109e01fc4bb4ad8836d75db50eedd7c:165536612e534bbfb434d14f956178a4')
            },
            body: 'grant_type=client_credentials'
          });
          const data = await response.json();
          this.accessToken = data.access_token;
          // Call the searchTracks method here or in the callback after getting the access token
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      },
      async searchTracks() {
        try {
          const response = await fetch(`https://api.spotify.com/v1/search?q=${this.searchQuery}&type=track`, {
            headers: {
              'Authorization': `Bearer ${this.accessToken}`
            }
          });
          const data = await response.json();
          this.tracks = data.tracks.items;
        } catch (error) {
          console.error('Error fetching tracks:', error);
        }
      },
      playTrack(track) {
        // Set the URL of the selected track's preview to the iframe
        this.currentTrackUrl = `https://open.spotify.com/embed/track/${track.id}?utm_source=generator`;
      }
    }
  };
  </script>
  