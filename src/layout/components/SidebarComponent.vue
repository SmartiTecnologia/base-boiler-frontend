<template>
    <div
      :class="sidebar ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'"
      class="fixed inset-y-0 left-0 z-30 w-64 px-5 overflow-y-auto transition duration-200 transform bg-white border-r border-gray-100 lg:translate-x-0 lg:relative lg:inset-0 -translate-x-full ease-out dark:bg-gray-900 dark:border-gray-700"
    >
    <div class="flex items-center mt-8 gap-2">
      <img
        class="w-auto h-14"
        src="https://www.reuniaorepresentante.sinpeem.com.br/static/media/android.e6134d6f.png"
        alt="logo"
      />
      <!-- <img class="w-auto h-8" src="/preview/premium-dashboard/assets/images/full-logo.svg" alt=""> -->
      <span class="font-semibold">Reunião de Representantes</span>
    </div>
    <hr class="my-10 border-gray-100" />
    <nav class="space-y-8 mt-5">
      <div class="space-y-4">
        <a
          class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-200 transform rounded-lg hover:text-gray-50 hover:bg-red-500 bg-opacity-40"
          href="/admin/dashboard/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <span class="mx-3 font-medium capitalize">Dashboard</span>
        </a>
      </div>
      <div class="space-y-4">
        <a
          class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-200 transform rounded-lg hover:text-gray-50 hover:bg-red-500 bg-opacity-40"
          href="/admin/participacoes"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <span class="mx-3 font-medium capitalize">Participações</span>
        </a>
      </div>
      <div class="space-y-4">
        <a
          class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-200 transform rounded-lg hover:text-gray-50 hover:bg-red-500 bg-opacity-40"
          href="/admin/enquete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span class="mx-3 font-medium capitalize">Enquetes</span>
        </a>
      </div>
      <div class="space-y-4">
        <a
          class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-200 transform rounded-lg hover:text-gray-50 hover:bg-red-500 bg-opacity-40"
          href="/admin/eventos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span class="mx-3 font-medium capitalize">Eventos</span>
        </a>
      </div>
      <div class="space-y-4">
        <a
          class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-200 transform rounded-lg hover:text-gray-50 hover:bg-red-500 bg-opacity-40"
          href="/admin/usuarios"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span class="mx-3 font-medium capitalize">Usuários</span>
        </a>
      </div>
    </nav>
  </div>
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