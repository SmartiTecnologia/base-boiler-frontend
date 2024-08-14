<template>
    <dashboardIcon v-if="name === 'dashboard'"></dashboardIcon>
</template>
<script lang="ts" setup>
import dashboardIcon from './iconsMenu/dashboardIcon.vue';
defineProps({
    name: String
})
</script>