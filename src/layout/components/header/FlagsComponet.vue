<template>
  <div class="relative inline-block w-full">
    <button @click="show = !show" class="p-2">
      <span class="flex items-center justify-center h-6 w-6">
        <img
          class="h-4 w-6"
          :src="
            selectedOption
              ? publicPath + selectedOption.image
              : publicPath + 'assets/images/flags/us.jpg'
          "
          alt="john avatar"
      /></span>
    </button>
    <transition name="fade">
      <div
        v-if="show"
        class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl rtl:right-auto rtl:left-0 dark:bg-gray-800"
      >
        <a
          v-for="option in menuLocation"
          :key="option.value"
          @click="selectCountry(option)"
          class="flex items-center text-sm gap-2.5 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <img class="h-5" :src="publicPath + option.image" alt="john avatar" />
          <h1 class="mx-2 font-semibold">{{ option.label }}</h1>
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import menuLocation from "@/translation/menu.js";
const show = ref(false);
const selectedOption = ref(null);
const publicPath = ref("http://localhost:5175/");
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const selectCountry = (option) => {
  console.log(option);
  selectedOption.value = option;
  show.value = false;
  locale.value = option.value;
};
</script>
