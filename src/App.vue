<script setup lang="ts">
  import NavBar from './components/NavBarComponent.vue'
  import HomeComponent from "@/components/HomeComponent.vue";
  import ClientsComponent from "@/components/ClientsComponent.vue";
  import WorksComponent from "@/components/WorksComponent.vue";
  import AboutComponent from "@/components/AboutComponent.vue";
  import ContactsComponent from "@/components/ContactsComponent.vue";
</script>

<template>
 <div class="footer-container">
   <NavBar/>
   <HomeComponent/>
   <ClientsComponent/>
   <WorksComponent/>
   <AboutComponent/>
   <ContactsComponent/>
 </div>
</template>

<style>
  .footer-container {
    max-width: 1245px;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>