<script setup>
import navbarVue from '../views/navbar.vue';
import tableVue from '../views/table.vue';
import footerVue from '../views/footer.vue';
</script>
<template>
  <navbarVue></navbarVue>
  <main class="bg-bgColor/40 font-rubik pb-28">
    <div class="container mx-auto pt-12">
      <tableVue></tableVue>
      <footerVue></footerVue>
    </div>
  </main>
</template>

<script>

</script>
