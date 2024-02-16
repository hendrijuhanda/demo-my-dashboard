<template>
  <UCard class="mb-4">
    <template #header>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold uppercase">My Profile</h3>
        </div>

        <div>
          <template v-if="isEditing">
            <div class="flex items-center">
              <UButton size="sm" color="gray" variant="solid" label="Cancel" class="mr-2" @click="isEditing = false" />

              <UButton size="sm" color="primary" variant="solid" label="Save" />
            </div>
          </template>

          <template v-else>
            <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Edit"
              :trailing="false" @click="isEditing = true" />
          </template>
        </div>
      </div>
    </template>

    <div class="flex items-center">
      <template v-if="isEditing">
        <div class="px-8 mr-4 flex-shrink-0 flex flex-col items-center justify-center">
          <div class="w-32 h-32 rounded-full bg-gray-50"></div>

          <UButton size="2xs" color="primary" variant="solid" label="Change Avatar" class="mt-2" />
        </div>

        <div class="flex-grow">
          <UTextarea v-model="inputTextarea" placeholder="Search..." class="w-full" autoresize />
        </div>
      </template>
      <template v-else>
        <div class="px-8 mr-4">
          <div class="w-32 h-32 rounded-full bg-gray-50"></div>
        </div>
        <div>
          <div>Highly skilled and motivated Web Front-End Developer with 5 years of experience in designing and
            implementing responsive, user-friendly web interfaces. Proficient in HTML5, CSS3, and JavaScript, with a
            strong foundation in modern front-end frameworks such as React.js and Vue.js. </div>
        </div>
      </template>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const isEditing = ref<boolean>(false)
const inputTextarea = ref<string>('Highly skilled and motivated Web Front-End Developer with 5 years of experience in designing and implementing responsive, user - friendly web interfaces.Proficient in HTML5, CSS3, and JavaScript, with a strong foundation in modern front - end frameworks such as React.js and Vue.js.'); 
</script>