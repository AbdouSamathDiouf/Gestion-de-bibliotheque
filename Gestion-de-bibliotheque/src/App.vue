<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/theme/:themeId">Thématique</RouterLink>
        <RouterLink to="/resource/:resourceId">Détails d'une resource</RouterLink>
        <RouterLink to="/add-resource/:themeId">Ajouter une resource</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    components : {
      Navbar,
    },
  };

</script>

<style scoped>

</style>
