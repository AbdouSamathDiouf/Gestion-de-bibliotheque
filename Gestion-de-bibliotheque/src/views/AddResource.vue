<template>
    <div class="add-resource">
      <ResourceForm :themeId="themeId" @add-resource="addResource" />
    </div>
  </template>
  
  <script>
  import ResourceForm from '@/components/ResourceForm.vue'; // Ajustez le chemin selon votre structure
  
  export default {
    data() {
      return {
        themeId: '', // Vous devez obtenir l'ID de la thématique depuis votre route
      };
    },
    computed: {
      // eslint-disable-next-line vue/no-dupe-keys
      themeId() {
        // Remplacez ceci par la manière dont vous obtenez l'ID de la thématique actuelle depuis votre route
        return this.$route.params.themeId;
      },
    },
    methods: {
      // Gère l'événement d'ajout d'une nouvelle ressource
      addResource() {
        // Implémentez la logique d'ajout ici, en utilisant votre état global (Vuex) ou une API
        // Après l'ajout, redirigez l'utilisateur vers la liste des ressources de la thématique
        this.$router.push(`/theme/${this.themeId}`);
      },
    },
    components: {
      ResourceForm,
    },
  };
  </script>
  
  <style scoped>
  .add-resource {
    text-align: center;
  }
  </style>
  