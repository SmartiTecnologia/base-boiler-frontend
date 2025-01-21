<template>
    <ul class="flex-1 px-3 py-10">
        <li v-for="menu in menuData" :key="menu.key">
            <a @click="selectMenu(menu)" :href="menu.children ? null : menu.url"
                class="relative flex items-center py-2 px-3 my-1 font-medium text-[--sidebar-text-light] dark:text-[--sidebar-text-dark] 
                rounded-md cursor-pointer transition-colors group hover:bg-[--sidebar-background-menu-hover-light] dark:hover:bg-[--sidebar-background--menu-hover-dark] text-gray-600">
                <IconsMenuVue :name="'dashboard'"></IconsMenuVue>
                <span :class='"overflow-hidden transition-all" + (sidebar ? " w-32 ml-3" : " w-0")'>{{ menu.title }}</span>
                <div :class="'menu-arrow transform transition-all duration-300' + (sidebar ? '' : ' hidden')" v-if="menu.children">
                    <svg v-if="isSubMenuVisible(menu) " xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0  0  24  24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--heroicons-outline" width="1em" height="1em"
                        viewBox="0  0  24  24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m5  5l7  7l-7  7"></path>
                    </svg>
                </div>
            </a>
            <SubMenu v-if="isSubMenuVisible(menu)" :subMenu="menu.children"></SubMenu>
        </li>
    </ul>
</template>
  
<script setup>
import SubMenu from './SubMenu.vue'
import { getMenuData } from '@/helpers/menu.js'
import { ref } from 'vue';
import IconsMenuVue from '@/components/icons/IconsMenu.vue';
import { useConfigStore } from '@/stores'
import { storeToRefs } from 'pinia'

const { sidebar, activeMenuItem } = storeToRefs(useConfigStore())
const menuData = ref(getMenuData)

const selectMenu = (menu) => {
    sidebar.value = true
    if (activeMenuItem.value === menu) {
        activeMenuItem.value = null; // Reset the active menu item
    } else {
        activeMenuItem.value = menu; // Set the active menu item
    }
    
}
const isSubMenuVisible = (menu) => {
    return activeMenuItem.value === menu; // Check if the current menu is the active one
}
</script>
<style>
.menu-item {
    display: flex;
    height: 2.25rem;
    width: 100%;
    cursor: pointer;
    align-items: center;
    -moz-column-gap: 0.5rem;
    column-gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
}
</style>