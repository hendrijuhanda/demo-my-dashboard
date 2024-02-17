<template>
  <div v-if="isMounted">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { authenticateUser } = useAuth();
const isMounted = ref<boolean>(false);

onMounted(async () => {
  const db = localStorage.getItem('db')

  if (!db) {
    await fetch('/initial-data.json').then(res => res.json()).then(data => {
      localStorage.setItem('db', JSON.stringify(data))
    })
  }

  await authenticateUser().catch(e => {
    if (e === 'unauthenticated') {
      navigateTo('/login')
    }
    else {
      console.error(e)
    }
  })

  isMounted.value = true
})
</script>
