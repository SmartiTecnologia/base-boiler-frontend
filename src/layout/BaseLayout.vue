<script setup>
import { useConfigStore } from "@/stores";
import { storeToRefs } from "pinia";
const { dark } = storeToRefs(useConfigStore());
import headerVue from "./components/HeaderComponent.vue";
import sidebarVue from "./components/SidebarComponent.vue";
import ContentVue from "./components/ContentComponet.vue";
</script>

<template>
  <div
    :x-data="{ sidebarOpen: false }"
    :class="
      'relative flex h-screen text-gray-800 bg-white font-roboto ' + (dark ? 'dark' : '')
    "
  >
    <sidebarVue></sidebarVue>
    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100 dark:bg-[#1f2937]">
      <headerVue></headerVue>
      <ContentVue></ContentVue>
    </div>
  </div>
</template>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
.p-button {
  color: #ffffff;
  background: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}
</style>
<style lang="sass">
@import './style.sass'
</style>
