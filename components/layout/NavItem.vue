<template>
  <div :class="{ 'pointer-events-none': props.isActive }">
    <NuxtLink
      :to="props.link"
      class="flex px-4 py-3 item-center hover:bg-gray-50 transition-colors rounded-xl"
      :class="{
        '!cursor-default bg-gray-50': props.isActive,
      }"
    >
      <div class="mr-4 flex items-center">
        <UIcon :name="props.icon" />
      </div>
      <div>{{ props.label }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface NavItemProps {
  icon: string;
  link: string;
  label: string;
  isActive: boolean;
}

const props = defineProps<NavItemProps>();
</script>
