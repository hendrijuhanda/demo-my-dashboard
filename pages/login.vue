
<template>
  <div class="w-full h-full flex justify-center items-center">
    <UCard class="w-96 max-w-full">
      <div class="mb-4">
        <UAlert icon="i-heroicons-exclamation-triangle" color="blue" variant="solid" title="Info"
          description="Use these credential to login: username: johndoe / pass: JohnDoe or username: janedoe / pass: JaneDoe." />
      </div>

      <div v-if="error" class="mb-4">
        <UAlert icon="i-heroicons-exclamation-triangle" color="red" variant="solid" title="Error!"
          description="Unauthenticated" />
      </div>

      <div>
        <UForm :schema="schema" :state="formState" class="space-y-4" @submit="handleSubmit">
          <UFormGroup name="username">
            <UInput v-model="formState.username" placeholder="Username" />
          </UFormGroup>

          <UFormGroup name="password">
            <UInput v-model="formState.password" type="password" placeholder="Password" />
          </UFormGroup>

          <div class="pt-4 flex justify-end">
            <UButton type="submit" :loading="isSubmitting"> Submit </UButton>
          </div>
        </UForm>
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { z } from "zod";

definePageMeta({
  layout: "auth",
});

const { auth, logUserIn } = useAuth();

const isSubmitting = ref<boolean>(false)
const error = ref<boolean>(false)

const formState = reactive({
  username: "",
  password: "",
});

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type Schema = z.output<typeof schema>;

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  isSubmitting.value = true

  error.value = false

  await logUserIn(event.data).then(() => {
    navigateTo('/')
  }).catch(e => {
    if (e === 'unauthenticated') {
      error.value = true
    }
    else {
      console.error(e)
    }
  })

  isSubmitting.value = false
};
</script>
