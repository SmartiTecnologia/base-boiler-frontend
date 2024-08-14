<template>
  <div class="h-screen">
    <nav
      class="h-full flex flex-col bg-[--background-color-light] border-b border-gray-100 shadow-sm dark:bg-[--backgroun-color-dark]"
    >
      <div
        class="p-4 pb-2 flex justify-between items-center text-[--sidebar-text-light] dark:text-[--sidebar-text-dark]"
      >
        <div class="flex items-center gap-3 w-full justify-center">
          <img
            :class="'overflow-hidden transition-all' + (sidebar ? ' w-28 h-10' : ' w-0')"
            src="https://merakiui.com/preview/premium-dashboard/assets/images/full-logo.svg"
          />
          <!-- <span class="font-semibold" v-if="sidebar">Smarti</span> -->
        </div>
      </div>
      <MenuItem> </MenuItem>
      <div class="border-t flex p-3">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <button
            type="button"
            @click="toggleDarkMode"
            aria-label="Color Mode"
            class="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border dark:border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
          >
            <svg
              v-if="dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <!---->
            <svg
              v-if="!dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 transform -rotate-90"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import MenuItem from "./sidebar/MenuItem.vue";
import { useConfigStore } from "@/stores";
import { storeToRefs } from "pinia";
const { setDarkMode } = useConfigStore();
const { sidebar, dark } = storeToRefs(useConfigStore());

const toggleDarkMode = () => {
  setDarkMode(!dark.value);
};
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
