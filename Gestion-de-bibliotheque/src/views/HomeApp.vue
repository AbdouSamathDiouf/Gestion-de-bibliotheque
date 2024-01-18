<template>
    <div class="home">
      <h2>Les thèmes</h2>
      <ul>
        <li v-for="theme in themes" :key="theme.id">
          <router-link :to="'/theme/' + theme.id">{{ theme.name }}</router-link>
        </li>
      </ul>
    </div>
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
    
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    background-color:rgb(23, 63, 63);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    font-size: 1.2em;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>  