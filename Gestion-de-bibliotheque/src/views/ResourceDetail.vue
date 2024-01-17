<template>
    <div class="resource-detail">
      <ResourceDetailCard :resource="resource" :themeId="themeId" @delete-resource="deleteResource" />
    </div>
  </template>
  
  <script>
  import ResourceDetailCard from '@/components/ResourceDetailCard.vue'; // Ajustez le chemin selon votre structure
  
  export default {
    data() {
      return {
        resource: null, // Vous devez obtenir cette ressource depuis votre état global (Vuex) ou une API
      };
    },
    computed: {
      themeId() {
        // Remplacez ceci par la manière dont vous obtenez l'ID de la thématique actuelle
        return this.$route.params.themeId;
      },
    },
    methods: {
      // Gère l'événement de suppression d'une ressource
      deleteResource() {
        // Implémentez la logique de suppression ici, en utilisant votre état global (Vuex) ou une API
        // Après la suppression, redirigez l'utilisateur vers la liste des ressources de la thématique
        this.$router.push(`/theme/${this.themeId}`);
      },
    },
    components: {
      ResourceDetailCard,
    },
  };
  </script>
  
  <style scoped>
  .resource-detail {
    text-align: center;
  }
  </style>  