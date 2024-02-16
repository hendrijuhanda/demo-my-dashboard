<template>
  <div>Index page.</div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Dashboard", pageSubtitle: "Your Information at a Glance" });
});
</script>
