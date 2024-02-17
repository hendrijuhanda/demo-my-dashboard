

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold uppercase">My Top Expertise</h3>
        </div>

        <div>
          <UButton to="/competences" icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid"
            label="Manage" :trailing="false" />
        </div>
      </div>
    </template>

    <div class="">
      <template v-for="(item, index) in items" :key="index">
        <div>
          <h4 class="font-bold">{{ item.title }}</h4>
          <div>{{ item.description }}</div>
        </div>

        <UDivider v-if="index !== items.length - 1" class="py-4" />
      </template>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const items = [{
  title: 'Frontend Developer',
  description: 'Adept at translating design mockups into pixel-perfect, cross-browser compatible code while adhering to best practices and web standards.'
},
{
  title: 'Mobile Developer',
  description: 'Proficient in Swift, Kotlin, and Java, with a solid understanding of mobile UI/UX design principles.'
},
{
  title: 'UI/UX Designer',
  description: 'Proficient in Adobe Creative Suite, Sketch, and Figma, with a strong understanding of user-centered design principles and best practices.'
}]
</script>