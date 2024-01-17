<template>
    <div class="resource-form">
      <h2>Add New Resource</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" v-model="formData.title" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea v-model="formData.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="image">Image URL:</label>
          <input type="url" v-model="formData.image" required />
        </div>
        <!-- Ajoutez d'autres champs appropriés ici -->
        <div class="form-buttons">
          <button type="submit">Add Resource</button>
          <router-link :to="'/theme/' + themeId">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          title: '',
          description: '',
          image: '',
          // Ajoutez d'autres propriétés pour chaque type de ressource
        },
      };
    },
    props: {
      themeId: {
        type: String,
        required: true,
      },
    },
    methods: {
      submitForm() {
        // Émet un événement pour signaler que l'utilisateur souhaite ajouter une nouvelle ressource
        this.$emit('add-resource', { ...this.formData, themeId: this.themeId });
        // Réinitialise le formulaire après l'ajout
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          title: '',
          description: '',
          image: '',
          // Réinitialisez les autres propriétés ici
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .resource-form {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .form-buttons button {
    background-color: #28a745;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .form-buttons button:hover {
    background-color: #218838;
  }
  
  .router-link {
    background-color: #dc3545;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .router-link:hover {
    background-color: #c82333;
  }
  </style>
  