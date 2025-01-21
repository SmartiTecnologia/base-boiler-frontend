<template>
  <header
    class="bg-white dark:bg-[--backgroun-color-dark] shadow-sm text-[--sidebar-text-light] dark:text-[--sidebar-text-dark]"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:px-6">
      <div class="flex items-center">
        <button
          @click="(sidebar = !sidebar), (activeMenuItem = null)"
          class="p-1.5 rounded-lg bg-transparent"
        >
          <svg
            v-if="!sidebar"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-last bg-transparent"
          >
            <path d="m7 18 6-6-6-6"></path>
            <path d="M17 6v12"></path>
          </svg>
          <svg
            v-if="sidebar"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-first bg-transparent"
          >
            <path d="m17 18-6-6 6-6"></path>
            <path d="M7 6v12"></path>
          </svg>
        </button>
      </div>
      <div class="relative inline-flex items-center space-x-3">
        <flags />
        <button
          @click="onLogout"
          class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100"
        >
          <span class="sr-only">Log out</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import flags from "./header/FlagsComponet.vue";
import { useConfigStore } from "@/stores";
import { storeToRefs } from "pinia";
const { sidebar, activeMenuItem } = storeToRefs(useConfigStore());
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
