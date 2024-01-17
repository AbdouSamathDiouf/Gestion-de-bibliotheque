<template>
    <div class="resource-detail-card">
      <h2>{{ resource.title }}</h2>
      <img :src="resource.image" alt="Resource Image" class="resource-image" />
      <div class="resource-details">
        <p><strong>Description:</strong> {{ resource.description }}</p>
        <!-- Ajoutez d'autres informations ici -->
      </div>
      <div class="buttons">
        <button @click="deleteResource">Delete Resource</button>
        <router-link :to="'/theme/' + themeId">Back to List</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      resource: {
        type: Object,
        required: true,
      },
      themeId: {
        type: String,
        required: true,
      },
    },
    methods: {
      deleteResource() {
        // Émet un événement pour signaler que l'utilisateur souhaite supprimer cette ressource
        this.$emit('delete-resource', this.resource.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .resource-detail-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
  }
  
  .resource-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .resource-details {
    margin-bottom: 15px;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .buttons button {
    background-color: #dc3545;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .buttons button:hover {
    background-color: #c82333;
  }
  </style>
  