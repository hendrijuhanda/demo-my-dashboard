<template>
  <NuxtLayout>
    <NuxtPage v-if="isMounted" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const isMounted = ref<boolean>(false);

onMounted(async () => {
  const db = localStorage.getItem('db')

  if (!db) {
    await fetch('/initial-data.json').then(res => res.json()).then(data => {
      localStorage.setItem('db', JSON.stringify(data))
    })
  }

  isMounted.value = true
})
</script>
