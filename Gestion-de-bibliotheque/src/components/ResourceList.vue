<template>
    <div>
      <h2>{{ themeName }} Resources</h2>
      <ul>
        <li v-for="resource in paginatedResources" :key="resource.id">
          <!-- Contenu de chaque élément de la liste -->
          {{ resource.title }}
        </li>
      </ul>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        itemsPerPage: 5, // Nombre d'éléments par page
        currentPage: 1,
      };
    },
    computed: {
      paginatedResources() {
        // Calcul de la plage d'éléments à afficher sur la page courante
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.resources.slice(startIndex, endIndex);
      },
      totalPages() {
        // Calcul du nombre total de pages
        return Math.ceil(this.resources.length / this.itemsPerPage);
      },
      themeName() {
        // Remplacez ceci par la manière dont vous obtenez le nom de la thématique actuelle
        return this.$route.params.themeId;
      },
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
    },
    // Assurez-vous d'avoir une propriété resources dans votre état global (Vuex)
    // qui contient la liste complète des ressources pour la thématique actuelle.
    // Vous pouvez adapter cela à votre structure de données réelle.
    props: {
      resources: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour votre composant ResourceList.vue */
  </style>
  