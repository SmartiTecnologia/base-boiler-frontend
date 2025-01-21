<script setup>
import IconsMenuVue from "@/components/icons/IconsMenu.vue";
defineProps({
  subMenu: { type: Array, default: () => [] },
});
</script>
<template>
  <ul calss="sub-menu" v-for="menu in subMenu" :key="menu.id">
    <li class="ml-4">
      <router-link
        :to="menu.url"
        class="relative flex flex-row items-center h-11 focus:outline-none text-[--sidebar-text-light] dark:text-[--sidebar-text-dark] 
        hover:bg-gray-50 border-l-4 hover:bg-[--sidebar-background-menu-hover-light]        
        dark:hover:bg-[--sidebar-background--menu-hover-dark] hover:border-indigo-500 pr-6 cursor-pointer"
      >
        <span class="inline-flex justify-center items-center ml-4">
          <IconsMenuVue :name="menu.icon"></IconsMenuVue>
        </span>
        <span class="ml-2 text-sm tracking-wide truncate">{{ menu.title }}</span>
      </router-link>
    </li>
  </ul>
</template>
