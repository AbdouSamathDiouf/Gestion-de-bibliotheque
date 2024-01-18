<template>
    <div class="theme">
      <h2>{{ themeName }} Resources</h2>
      <ResourceList :resources="resources" @view-details="viewDetails" />
    </div>
  </template>
  
  <script>
  import ResourceList from '@/components/ResourceList.vue'; // Ajustez le chemin selon votre structure
  
  export default {
    data() {
      return {
        resources: [], // Vous devez obtenir cette liste depuis votre état global (Vuex) ou une API
      };
    },
    computed: {
      themeName() {
        // Remplacez ceci par la manière dont vous obtenez le nom de la thématique actuelle
        return this.$route.params.themeId;
      },
    },
    methods: {
      // Gère l'événement d'affichage des détails d'une ressource
      viewDetails(resources) {
        this.$router.push(`/resource/${resources.id}`);
      },
    },
    components: {
      ResourceList,
    },
  };
  </script>
  
  <style scoped>
  .theme {
    text-align: center;
  }
  </style>  