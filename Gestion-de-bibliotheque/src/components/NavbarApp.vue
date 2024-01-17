<!--<script setup>
import { RouterLink, RouterView} from 'vue-router'
</script>
-->
<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">Ma Bibliothèque</router-link>
      <div class="navbar-links">
        <router-link v-for="theme in themes" :key="theme.id" :to="'/theme/' + theme.id" class="navbar-link">
            {{ theme.name }}
        </router-link>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
  
  <script>

  export default {
    data() {
        return {
            themes: [
                { id: 'games', name: 'Jeux' },
                { id: 'movies', name: 'Films' },
                { id: 'series', name: 'Séries' },
                { id: 'musiques', name: 'Musiques' },
                { id: 'livres', name: 'Livres' },
                { id: 'animaux', name: 'Animaux' }
            ],
        };
    },
  //components: { RouterView }
};
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px 0;
    color: #fff;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand {
    font-size: 1.5em;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-links {
    display: flex;
  }
  
  .navbar-link {
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-link:hover {
    text-decoration: underline;
  }
  </style>
  