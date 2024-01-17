<template>
    <div class="resource-card">
      <img :src="resource.image" alt="Resource Image" class="resource-image" />
      <div class="resource-details">
        <h3 class="resource-title">{{ resource.title }}</h3>
        <p class="resource-description">{{ resource.description }}</p>
        <!-- Ajoutez d'autres informations ici -->
      </div>
      <button @click="viewDetails">View Details</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      resource: {
        type: Object,
        required: true,
      },
    },
    methods: {
      viewDetails() {
        // Émet un événement pour signaler que l'utilisateur souhaite voir les détails de cette ressource
        this.$emit('view-details', this.resource);
      },
    },
  };
  </script>
  
  <style scoped>
  .resource-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .resource-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .resource-details {
    margin-top: 10px;
    text-align: center;
  }
  
  .resource-title {
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  
  .resource-description {
    color: #666;
  }
  </style>
  