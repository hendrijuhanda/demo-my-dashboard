<template>
  <div class="flex items-center justify-between h-full">
    <div>
      <h2 class="text-lg font-bold uppercase">{{ layoutState.pageTitle }}</h2>
      <div class="text-xs text-gray-500 italic">{{ layoutState.pageSubtitle }}</div>
    </div>

    <div>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <div class="flex items-center">
          <div class="mr-2">Hi, {{ auth.first_name }}</div>
          <UIcon name="i-heroicons-chevron-down-solid" />
        </div>
      </UDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const { layoutState } = useLayoutState();
const authStore = useAuth();
const { auth } = storeToRefs(authStore);
const { logUserOut } = authStore

const items = [
  [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle-solid', click: () => {
      logUserOut().then(() => {
        navigateTo('/login')
      })
    }
  }]
]
</script>
