<template>
  <main class="flex-1 overflow-y-auto">
    <div class="px-4 py-8 sm:px-6">
      <section
        class="flex flex-col mb-5 w-full px-6 md:justify-between md:items-center md:flex-row"
      >
        <div>
          <h2 class="text-3xl font-medium text-gray-800">Dashboard</h2>
          <p class="mt-2 text-sm text-gray-500">Mobile UX/UI Design Course</p>
        </div>
        <div class="flex flex-col mt-6 md:flex-row md:-mx-1 md:mt-0"></div>
      </section>
      <router-view />
    </div>
  </main>
</template>
