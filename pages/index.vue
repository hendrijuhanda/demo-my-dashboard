<template>
  <div>
    <PageDashboardProfile />

    <div class="grid grid-cols-2 gap-4">
      <div>
        <PageDashboardExpertise />
      </div>

      <div>
        <PageDashboardSocial />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setLayoutState } = useLayoutState();

onBeforeMount(() => {
  setLayoutState({ pageTitle: "Dashboard", pageSubtitle: "Your Information at a Glance" });
});
</script>
