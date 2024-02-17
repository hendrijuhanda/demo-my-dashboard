
<template>
  <div>
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold uppercase">Manage Competences</h3>
          </div>

          <div>
            <UButton label="Add New" size="sm" icon="i-heroicons-plus" :disabled="isAdding" @click="handleAdd" />
          </div>
        </div>
      </template>

      <div class="">
        <div v-if="isAdding">
          <div class="flex items-center">
            <div class="flex-grow mr-4">
              <UInput v-model="inputName" placeholder="Competence name" class="mb-2" />
              <UTextarea v-model="inputDescription" placeholder="Competence description" autoresize class="w-full" />
            </div>

            <div class="flex items-center flex-shrink-0">
              <UButton label="Cancel" size="2xs" color="gray" class="mr-2" @click="handleAddCancel" />
              <UButton label="Save" size="2xs" />
            </div>
          </div>

          <UDivider class="py-4" />
        </div>
        <template v-for="(item, index) in items" :key="index">
          <div>
            <template v-if="editingId === item.id">
              <div class="flex items-center">
                <div class="flex-grow mr-4">
                  <UInput v-model="inputName" placeholder="Competence name" class="mb-2" />
                  <UTextarea v-model="inputDescription" placeholder="Competence description" autoresize class="w-full" />
                </div>

                <div class="flex items-center flex-shrink-0">
                  <UButton label="Cancel" size="2xs" color="gray" class="mr-2" @click="editingId = null" />
                  <UButton label="Save" size="2xs" />
                </div>
              </div>
            </template>

            <template v-else>
              <div class="flex items-center">
                <div class="flex-grow mr-4">
                  <h4 class="font-bold">{{ item.title }}</h4>
                  <div>{{ item.description }}</div>
                </div>

                <div class="flex items-center flex-shrink-0">
                  <UButton label="Edit" size="2xs" class="mr-2" @click="handleEditClick(item)" />
                  <UButton label="Delete" size="2xs" color="red" class="mr-2" />
                  <UButton size="2xs" color="gray" icon="i-heroicons-chevron-up" square class="mr-2"
                    :disabled="index === 0" />
                  <UButton size="2xs" color="gray" icon="i-heroicons-chevron-down" square
                    :disabled="index === items.length - 1" />
                </div>
              </div>
            </template>
          </div>

          <UDivider v-if="index !== items.length - 1" class="py-4" />
        </template>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const items = [{
  id: 1,
  title: 'Frontend Developer',
  description: 'Adept at translating design mockups into pixel-perfect, cross-browser compatible code while adhering to best practices and web standards.'
},
{
  id: 2,
  title: 'Mobile Developer',
  description: 'Proficient in Swift, Kotlin, and Java, with a solid understanding of mobile UI/UX design principles.'
},
{
  id: 3,
  title: 'UI/UX Designer',
  description: 'Proficient in Adobe Creative Suite, Sketch, and Figma, with a strong understanding of user-centered design principles and best practices.'
}]

const isAdding = ref<boolean>(false)
const editingId = ref<number | null>(null);

const inputName = ref<string>('');
const inputDescription = ref<string>('');

const handleAdd = () => {
  isAdding.value = true
  editingId.value = null
  inputName.value = ''
  inputDescription.value = ''
}

const handleAddCancel = () => {
  isAdding.value = false
}

const handleEditClick = (item: any) => {
  isAdding.value = false
  editingId.value = item.id
  inputName.value = item.title
  inputDescription.value = item.description
}
</script>