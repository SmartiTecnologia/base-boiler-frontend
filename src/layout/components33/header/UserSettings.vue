<template>
  <div class="relative inline-block w-full">
    <button @click="show = !show" class="p-2">
      <img
        class="flex-shrink-0 object-cover w-8 h-8 rounded-full"
        :src="
          selectedOption
            ? publicPath + selectedOption.image
            : publicPath + 'assets/images/flags/us.jpg'
        "
        alt="john avatar"
      />
    </button>
    <transition name="fade">
      <div
        v-if="show"
        class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl rtl:right-auto rtl:left-0"
      >
        <a
          v-for="option in menuLocation"
          :key="option.value"
          @click="selectCountry(option)"
          class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100 cursor-pointer"
        >
          <img
            class="flex-shrink-0 object-cover w-8 h-8 rounded-full"
            :src="publicPath + option.image"
            alt="john avatar"
          />
          <h1 class="mx-2 text-sm font-semibold text-gray-700">{{ option.label }}</h1>
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
