<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Ma Bibliothèque</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="theme in themes" :key="theme.id" class="nav-item">
            <router-link :to="'/theme/' + theme.id" class="nav-link">{{ theme.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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