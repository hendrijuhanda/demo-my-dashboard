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
              <UButton size="sm" color="gray" variant="solid" label="Cancel" class="mr-2" :disabled="isSubmitting"
                @click="isEditing = false" />

              <UButton size="sm" color="primary" variant="solid" label="Save" :loading="isSubmitting"
                @click="handleSave" />
            </div>
          </template>

          <template v-else>
            <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Edit"
              :trailing="false" :disabled="isLoading" @click="handleEdit" />
          </template>
        </div>
      </div>
    </template>

    <div class="flex items-center">
      <template v-if="isEditing">
        <div class="px-8 mr-4 flex-shrink-0 flex flex-col items-center justify-center">
          <div class="w-32 h-32 rounded-full bg-gray-50 overflow-hidden">
            <img :src="avatar" class="w-full h-full object-cover" />
          </div>

          <UButton size="2xs" color="primary" variant="solid" label="Change Avatar" class="mt-2"
            @click="handleChangeAvatar" />

          <input ref="upload" type="file" class="sr-only" @change="handleUploadInputChange" />
        </div>

        <div class="flex-grow">
          <UTextarea v-model="inputTextarea" placeholder="Search..." class="w-full" autoresize />
        </div>
      </template>
      <template v-else>
        <template v-if="isLoading">
          <div class="flex justify-center py-8 w-full">
            <LayoutLoader />
          </div>
        </template>
        <template v-else>
          <div class="px-8 mr-4">
            <div class="w-32 h-32 rounded-full bg-gray-50 overflow-hidden">
              <img :src="user.avatar" class="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div>{{ user.description }}</div>
          </div>
        </template>
      </template>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const isLoading = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const isEditing = ref<boolean>(false)
const inputTextarea = ref<string>('');
const upload = ref(null)
const inputImage = ref<string | null>(null)

const userStore = useUser();
const { user } = storeToRefs(userStore)
const { fetchUserData, updateUserData } = userStore

const avatar = computed(() => inputImage.value || user.value.avatar)

const handleEdit = () => {
  isEditing.value = true

  inputTextarea.value = user.value.description
  inputImage.value = null
}

const handleSave = async () => {
  isSubmitting.value = true

  const payload: any = {
    description: inputTextarea.value
  }

  if (inputImage.value) {
    payload.avatar = inputImage.value
  }

  await updateUserData(payload).catch(console.error)

  isSubmitting.value = false
  isEditing.value = false
}

const handleChangeAvatar = () => {
  // @ts-ignore
  upload.value.click();
}

const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const handleUploadInputChange = async (event: any) => {
  const file = event.target.files[0];

  const base64 = await convertBase64(file) as string

  inputImage.value = base64
}

onMounted(async () => {
  isLoading.value = true

  await fetchUserData().catch(console.error)

  isLoading.value = false
})
</script>