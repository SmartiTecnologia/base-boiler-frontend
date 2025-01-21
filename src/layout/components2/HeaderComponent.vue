<template>
  <header class="bg-white border-b border-gray-100">
    <div class="flex items-center justify-between px-4 py-4 sm:px-6">
      <div class="flex items-center">
        <button
          @click="sidebar = !sidebar"
          class="text-gray-500 lg:hidden focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div class="relative inline-block">
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
  import { useConfigStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  const { sidebar } = storeToRefs(useConfigStore())
</script>
<style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
