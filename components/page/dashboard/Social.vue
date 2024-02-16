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

    <div class="">
      <template v-if="isEditing">
        <div v-for="(item, index) in items" :key="index" class="flex items-center"
          :class="{ 'mb-4': index !== items.length - 1 }">
          <div class="flex items-center text-xl mr-4">
            <UIcon :name="iconName(item.name)" />
          </div>

          <div class="mr-4 flex-grow">{{ item.link }}</div>

          <div>
            <UButton label="Delete" size="xs" color="red" />
          </div>
        </div>

        <div class="flex items-center mt-4">
          <div class="mr-4">
            <USelectMenu v-model="selected" :options="socials">
              <template #leading>
                <UIcon v-if="selected.icon" :name="(selected.icon as string)" class="w-4 h-4 mx-0.5" />
              </template>
            </USelectMenu>
          </div>
          <div class="mr-4 flex-grow">
            <UInput placeholder="Input link" />
          </div>
          <div>
            <UButton label="Add" size="xs" />
          </div>
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

    </div>
  </UCard>
</template>

<script setup lang="ts">
const items = [
  { name: 'facebook', link: "https://facebook.exa/asd/asd" },
  { name: 'instagram', link: "https://ig.exa/asd/asd" },
  { name: 'whatsapp', link: "https://whatsapp.exam/asd/asd" }
];

const isEditing = ref<boolean>(false);

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

const selected = ref(socials[0])
</script>