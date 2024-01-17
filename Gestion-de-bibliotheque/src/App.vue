<template>
  <NavbarApp />
  <ResourceList />
  <ResourceCard />
  <ResourceDetailCard />
  <ResourceForm />
</template>

<script>
  import NavbarApp from '@/components/NavbarApp.vue';
  import ResourceList from '@/components/ResourceList.vue';
  import ResourceCard from '@/components/ResourceCard.vue';
  import ResourceDetailCard from '@/components/ResourceDetailCard.vue';
  import ResourceForm from '@/components/ResourceForm.vue';

  export default {
    components : {
      NavbarApp,
      ResourceList,
      ResourceCard,
      ResourceDetailCard,
      ResourceForm
    }
  };

</script>

<style scoped>

</style>
