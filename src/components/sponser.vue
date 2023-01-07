<script setup>
import navbarVue from '../views/navbar.vue';
import diagramVue from '../views/diagram.vue';
</script>
<template>
  <navbarVue></navbarVue>
  <main class="bg-bgColor/40 pb-40">
    <div class="container mx-auto">
      <div class="flex items-center justify-between gap-8 pt-11">
        <div class="flex w-1/3 items-center gap-4 p-6 bg-white rounded-lg">
          <img src="../assets/dashlogo1.svg" alt="dashlogo" />
          <div>
            <p class="font-normal text-xs text-dashsubtitleColor">
              Jami to'langan summa
            </p>
            <h3 class="font-bold text-xl">
              1 684 325 000 <span class="text-dashsubtitleColor/50">UZS</span>
            </h3>
          </div>
        </div>
        <div class="flex w-1/3 items-center gap-4 p-6 bg-white rounded-lg">
          <img src="../assets/dashlogo2.svg" alt="dashlogo" />
          <div>
            <p class="font-normal text-xs text-dashsubtitleColor">
              Jami so'ralgan summa
            </p>
            <h3 class="font-bold text-xl">
              14 098 530 000 <span class="text-dashsubtitleColor/50">UZS</span>
            </h3>
          </div>
        </div>
        <div class="flex w-1/3 items-center gap-4 p-6 bg-white rounded-lg">
          <img src="../assets/dashlogo3.svg" alt="dashlogo" />
          <div>
            <p class="font-normal text-xs text-dashsubtitleColor">
              To'lanishi kerak summa
            </p>
            <h3 class="font-bold text-xl">
              12 414 205 000 <span class="text-dashsubtitleColor/50">UZS</span>
            </h3>
          </div>
        </div>
      </div>
     <diagramVue></diagramVue>
    </div>
  </main>
</template>

<script>

</script>
