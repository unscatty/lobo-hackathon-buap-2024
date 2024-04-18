<script setup lang="ts">
import { i18next } from '@/i18n'
import * as teamsService from '@/services/teams.service'
import { capitalize } from '@/utils/string.util'
import type { Session } from '@auth/core/types'
import type { UserSession } from '@server/models/session.model'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { onMounted, ref } from 'vue'
import { z } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { insertTeamZodSchema } from '@/schemas/forms/team.schema'

const { session, redirectUrl } = defineProps<{
  session: Session | null
  redirectUrl: string
}>()

// Set error messages in spanish for zod
z.setErrorMap(makeZodI18nMap(i18next))

const [DefineErrorTemplate, ErrorMessage] = createReusableTemplate<{
  error?: string
}>()

// Form validation
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(insertTeamZodSchema),
})

const validateOnErrorsConfig: Parameters<typeof defineField>[1] = {}

const [name] = defineField<'name', string>('name', validateOnErrorsConfig)
const [description] = defineField<'description', string>('description', validateOnErrorsConfig)

const setDefaultValues = () => {
  name.value = ''
  description.value = ''
}

onMounted(() => {
  setDefaultValues()
})

const isSubmitting = ref(false)

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    const { data, error } = await teamsService.create(session as UserSession, values)

    if (error) {
      alert(
        'Ocurrió un error al crear el equipo. Inténtalo de nuevo. Si el problema persiste, contacta a soporte.'
      )

      return
    }

    if (data) {
      resetForm()

      window.location.href = redirectUrl
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <!-- Errors component -->
  <DefineErrorTemplate v-slot="{ error }">
    <p v-show="error" class="pt-1.5 text-xs text-red-500 font-medium leading-3 font-mono italic">
      {{ error && capitalize(error) }}
    </p>
  </DefineErrorTemplate>

  <form novalidate class="w-full" @submit.prevent="onSubmit">
    <div class="flex flex-col gap-y-6">
      <div>
        <label for="name" class="block text-primary font-semibold leading-6">
          Nombre de tu equipo
        </label>
        <div class="mt-2.5">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-white/10',
              'focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.name" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="description" class="block text-primary font-semibold leading-6">
          Descripción de tu equipo (Opcional)
        </label>
        <div class="mt-2.5">
          <textarea
            id="description"
            v-model="description"
            name="description"
            rows="3"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.description" />
        </div>
      </div>
      <div class="mt-4 w-full" sm="col-span-2 flex gap-4 justify-center justify-items-stretch">
        <button
          type="submit"
          :class="[
            'bg-secondary',
            'w-full',
            'inline-flex',
            'justify-center',
            'rounded-md',
            'px-3',
            'py-2',
            'shadow-sm',
            'text-primary ',
            'text-lg',
            'font-black',
            'tracking-2',
            'uppercase',
          ]"
          sm="w-50%"
          hover="bg-secondary-600"
        >
          <div
            v-show="isSubmitting"
            class="align-[-0.125em] text-surface inline-block h-8 w-8 animate-spin border-4 border-current border-e-transparent rounded-full border-solid motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span
              class="![clip:rect(0,0,0,0)] !absolute !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 !-m-px"
              >Enviando...</span
            >
          </div>
          <span v-show="!isSubmitting"> Crear equipo </span>
        </button>
      </div>
    </div>
  </form>
</template>
