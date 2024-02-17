<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold uppercase">Social Links</h3>
        </div>

        <div>
          <template v-if="isEditing">
            <div class="flex items-center">
              <UButton size="sm" color="gray" variant="solid" label="Cancel" class="mr-2" :disable="isSubmitting"
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

    <div class="">
      <template v-if="isEditing">
        <div v-for="(item, index) in inputItems" :key="index" class="flex items-center"
          :class="{ 'mb-4': index !== inputItems.length - 1 }">
          <div class="flex items-center text-xl mr-4">
            <UIcon :name="iconName(item.name)" />
          </div>

          <div class="mr-4 flex-grow">{{ item.link }}</div>

          <div>
            <UButton label="Delete" size="xs" color="red" @click="handleDelete(index)" />
          </div>
        </div>

        <div v-if="inputItems.length !== socials.length" class="flex items-center" :class="{ 'mt-4': inputItems.length }">
          <div class="mr-4">
            <USelectMenu v-model="selected" :options="socialsFiltered">
              <template #leading>
                <UIcon v-if="selected.icon" :name="(selected.icon as string)" class="w-4 h-4 mx-0.5" />
              </template>
            </USelectMenu>
          </div>
          <div class="mr-4 flex-grow">
            <UInput v-model="inputLink" placeholder="Input link" />
          </div>
          <div>
            <UButton label="Add" size="xs" @click="handleAdd" />
          </div>
        </div>
      </template>

      <template v-else>
        <template v-if="isLoading">
          <div class="flex justify-center py-8 w-full">
            <LayoutLoader />
          </div>
        </template>
        <template v-else>
          <div v-for="(item, index) in items" :key="index" class="flex items-center"
            :class="{ 'mb-4': index !== items.length - 1 }">
            <div class="flex items-center text-xl mr-4">
              <UIcon :name="iconName(item.name)" />
            </div>

            <div>{{ item.link }}</div>
          </div>
        </template>
      </template>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { useSocial } from '~/stores/social'

const socialStore = useSocial();
const { socials: items } = storeToRefs(socialStore)
const { fetchSocial, updateSocial } = socialStore

const isLoading = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const isEditing = ref<boolean>(false);
const inputItems = ref<any[]>([]);
const inputLink = ref<string>('');

const iconName = (key: string) => {
  const iconMap: any = {
    'facebook': 'i-logos-facebook',
    'instagram': 'i-logos-instagram-icon',
    'whatsapp': 'i-logos-whatsapp-icon',
    'twitter': 'i-logos-twitter',
    'mastodon': 'i-logos-mastodon-icon'
  }

  return iconMap[key]
}

const socials = [{
  id: 'facebook',
  label: 'Facebook',
  icon: iconName('facebook')
},
{
  id: 'instagram',
  label: 'Instagram',
  icon: iconName('instagram')
},
{
  id: 'whatsapp',
  label: 'Whatsapp',
  icon: iconName('whatsapp')
},
{
  id: 'twitter',
  label: 'Twitter',
  icon: iconName('twitter')
},
{
  id: 'mastodon',
  label: 'Mastodon',
  icon: iconName('mastodon')
}];

const socialsFiltered = computed(() => socials.filter(social => {
  const found = inputItems.value.find(item => item.name === social.id)

  return !found;
}))

const selected = ref(socialsFiltered.value[0])

const handleEdit = () => {
  isEditing.value = true

  inputItems.value = [...items.value]
  inputLink.value = ''
}

const handleDelete = (index: number) => {
  inputItems.value.splice(index, 1)
}

const handleAdd = () => {
  inputItems.value.push({
    name: selected.value.id,
    link: inputLink.value
  })

  inputLink.value = ''
}

const handleSave = async () => {
  isSubmitting.value = true

  await updateSocial(inputItems.value).catch(console.error)

  isSubmitting.value = false
  isEditing.value = false
}

watch(socialsFiltered, (val) => {
  selected.value = val[0]
})

onBeforeMount(async () => {
  isLoading.value = true

  await fetchSocial().catch(console.error)

  isLoading.value = false
})
</script>