<template>
  <div class="flex h-screen">
    <!-- Left section -->
    <div
      class="flex-shrink-0 h-full flex flex-col"
      :style="{
        width: sidebarWidth,
      }"
    >
      <!-- Header logo -->
      <div class="flex-shrink-0 flex items-center">
        <header
          class="p-4 flex-grow flex justify-center"
          :style="{ height: headerHeight }"
        >
          <h1 class="sr-only">My Dashboard</h1>
          <NuxtLink to="/" class="block">
            <!-- <LayoutLogo /> -->
          </NuxtLink>
        </header>
      </div>

      <!-- Nav -->
      <div class="flex-grow">
        <aside class="m-4 mt-0">
          <LayoutNav />
        </aside>
      </div>
    </div>

    <!-- Right section -->
    <div class="flex-grow h-full flex flex-col">
      <!-- Main header -->
      <div
        class="flex-shrink-0 flex items-center"
        :style="{ height: headerHeight }"
      >
        <header class="px-4 flex-grow">
          <LayoutHeader />
        </header>
      </div>

      <!-- Main page -->
      <div class="flex flex-grow overflow-y-auto">
        <main class="m-4 ml-0 mt-0 bg-gray-50 rounded-xl p-4 flex-grow">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarWidth: string = "300px";
const headerHeight: string = "60px";
</script>
