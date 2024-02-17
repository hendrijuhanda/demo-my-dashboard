<template>
  <div>
    <PageCompetences />
  </div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Competences", pageSubtitle: "Your Skills and Expertise" });
});
</script>
