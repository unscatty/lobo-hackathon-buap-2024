<script setup lang="ts">
import {
  heardFromValues,
  preRegisterSchema,
  type PreregisterData,
} from '@/schemas/forms/pre-register.schema'
import Toggle from '@components/common/forms/Toggle.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useForm } from 'vee-validate'
import { onMounted, ref } from 'vue'
import { i18next } from '@/i18n'
import { z } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { capitalize } from '@/utils/string.util'
import { preRegister, type PreRegisterResponse } from '@/services/pre-register.service'
import { createNotifier, defineNotificationComponent, NotificationGroup } from 'notiwind'

// Server errors toast
const notify = createNotifier<{ response: PreRegisterResponse; data?: PreregisterData }>()
const Notification = defineNotificationComponent<{
  response: PreRegisterResponse
  data?: PreregisterData
}>()

const [DefineErrorToast, ErrorToast] = createReusableTemplate<{
  success: false
  error: string
  kind?: string
  formErrors?: Record<string, string>
  close: (id?: number) => void
}>()

const [DefineSuccessToast, SuccessToast] = createReusableTemplate<{
  success: true
  message: string
  data: PreregisterData
  close: (id?: number) => void
}>()

// Set error messages in spanish for zod
z.setErrorMap(makeZodI18nMap(i18next))

const [DefineErrorTemplate, ErrorMessage] = createReusableTemplate<{
  error?: string
}>()

// Form validation
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(preRegisterSchema),
})

const validateOnErrorsConfig: Parameters<typeof defineField>[1] = {}

const [firstname] = defineField<'firstName', string>('firstName', validateOnErrorsConfig)
const [lastName] = defineField<'lastName', string>('lastName', validateOnErrorsConfig)
const [email] = defineField<'email', string>('email', validateOnErrorsConfig)
const [majorIn] = defineField<'majorIn', string>('majorIn', validateOnErrorsConfig)
const [semester] = defineField<'semester', number>('semester', validateOnErrorsConfig)
const [schoolOfOrigin] = defineField<'schoolOfOrigin', string>(
  'schoolOfOrigin',
  validateOnErrorsConfig
)
const [whatToExpect] = defineField<'whatToExpect', string>('whatToExpect', validateOnErrorsConfig)
const [heardFrom] = defineField<'heardFrom', keyof typeof heardFromValues>(
  'heardFrom',
  validateOnErrorsConfig
)
const [fromBuap] = defineField<'fromBuap', boolean>('fromBuap', validateOnErrorsConfig)
const [firstTimer] = defineField<'firstTimer', boolean>('firstTimer', validateOnErrorsConfig)

const setDefaultValues = () => {
  fromBuap.value = true
  firstTimer.value = true
  heardFrom.value = 'OTHER'
  semester.value = 1
}

onMounted(() => {
  setDefaultValues()
})

// Pre-registration
const serverErrorsMap: Record<string, string> = {
  invalidFormData: 'Los datos ingresados son inválidos',
  userAlreadyExists: 'Ya existe un usuario con el mismo correo electrónico',
  databaseError:
    'Error en la base de datos. Por favor, intenta de nuevo más tarde o contacta a soporte',
  unknownError:
    'Ocurrió un error desconocido. Por favor, intenta de nuevo más tarde o contacta a soporte',
  useDifferentEmail: 'Usa un correo electrónico diferente',
  emailError:
    'Tu pre-registro fue exitoso, pero hubo un error al enviar el correo de confirmación. Pronto recibirás un correo de confirmación.',
}

const isSubmitting = ref(false)
const toastWaitTime = 5000

const onSubmit = handleSubmit(async (values, { resetForm, setFieldError }) => {
  isSubmitting.value = true

  const response = await preRegister(values)
  const responseData = (await response.json()) as PreRegisterResponse

  isSubmitting.value = false

  if (response.ok) {
    if (!responseData.success) {
      const errorMessage =
        serverErrorsMap[responseData.error] ??
        'Ocurrió un error desconocido. Por favor, intenta de nuevo más tarde o contacta a soporte'

      // Show error toast
      notify(
        {
          group: 'top-with-hover',
          response: {
            success: false,
            error: errorMessage,
          },
        },
        toastWaitTime
      )

      return
    }

    // Reset form
    resetForm()

    setDefaultValues()

    // Successful pre-registration
    // Show success message
    notify(
      {
        group: 'top-with-hover',
        response: responseData,
        data: values,
      },
      toastWaitTime
    )
  } else if (!responseData.success) {
    console.log(responseData)

    if (response.status === 409) {
      // Email already exists
      setFieldError('email', 'Usa un correo electrónico diferente')
    }

    const errorMessage =
      serverErrorsMap[responseData.error] ??
      'Ocurrió un error desconocido. Por favor, intenta de nuevo más tarde o contacta a soporte'

    // Show error toast
    notify(
      {
        group: 'top-with-hover',
        response: {
          success: false,
          error: errorMessage,
        },
      },
      toastWaitTime
    )

    // Show form errors
    if (responseData.formErrors) {
      for (const [key, value] of Object.entries(responseData.formErrors)) {
        setFieldError(key as keyof typeof values, value)
      }
    }
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

  <!-- Success notification -->
  <DefineSuccessToast v-slot="{ data, close }">
    <div class="p-4">
      <div class="flex items-start">
        <div class="shrink-0">
          <svg
            class="h-6 w-6 text-success-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="ml-3 w-0 flex flex-1 flex-col gap-1">
          <p class="text-gray-800 font-semibold">¡Gracias por pre-registrarte!</p>
          <p class="text-sm text-gray-500 font-semibold">
            {{ data.firstName }}, te mantendremos informado sobre las últimas noticias y
            actualizaciones del Lobo Hackathon BUAP al correo:
            <span text-black font-bold>{{ data.email }}</span>
          </p>
          <p text-center text-lg text-black>Nos vemos en el evento</p>
        </div>
        <div class="ml-4 flex shrink-0">
          <button
            class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            @click="() => close()"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </DefineSuccessToast>

  <DefineErrorToast v-slot="{ error, close }">
    <div class="p-4">
      <div class="flex items-start">
        <div class="shrink-0">
          <svg class="h-6 w-6 text-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
            />
          </svg>
        </div>
        <div class="ml-3 w-0 flex flex-1 flex-col gap-1">
          <p class="text-red-700 font-semibold">¡Oh no! Ha ocurrido un error</p>
          <p class="text-sm text-gray-500 font-semibold">
            {{ error }}
          </p>
        </div>
        <div class="ml-4 flex shrink-0">
          <button
            class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            @click="() => close()"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </DefineErrorToast>

  <!-- Notifications (toast) -->
  <NotificationGroup group="top-with-hover">
    <div class="pointer-events-none fixed inset-0 flex items-start justify-end p-6 px-4 py-6">
      <div class="max-w-sm w-full">
        <Notification
          v-slot="{ notifications, close, hovering }"
          enter="ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="pointer-events-auto mt-4 max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            @mouseover="hovering(notification.id, true)"
            @mouseleave="hovering(notification.id, false)"
          >
            <SuccessToast
              v-if="notification.response.success"
              v-bind="{ data: notification.data, close: () => close(notification.id) }"
            />
            <ErrorToast
              v-else
              v-bind="{ error: notification.response.error, close: () => close(notification.id) }"
            />
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

  <form novalidate class="w-full" @submit.prevent="onSubmit">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-6">
      <div>
        <label for="firstName" class="block text-primary font-semibold leading-6">
          Nombre(s)
        </label>
        <div class="mt-2.5">
          <input
            id="firstName"
            v-model="firstname"
            type="text"
            name="firstName"
            autoComplete="given-name"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-white/10',
              'focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.firstName" />
        </div>
      </div>
      <div>
        <label for="lastName" class="block text-primary font-semibold leading-6">
          Apellido(s)
        </label>
        <div class="mt-2.5">
          <input
            id="lastName"
            v-model="lastName"
            type="text"
            name="lastName"
            autoComplete="family-name"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.lastName" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-primary font-semibold leading-6">
          Correo electrónico
        </label>
        <div class="mt-2.5">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            autoComplete="email"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.email" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="majorIn" class="block text-primary font-semibold leading-6"> Carrera </label>
        <div class="mt-2.5">
          <input
            id="majorIn"
            v-model="majorIn"
            type="text"
            name="majorIn"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.majorIn" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <div class="sm:flex sm:items-center sm:gap-20">
          <label for="semester" class="block text-primary font-semibold leading-6">
            Semestre
          </label>
          <select
            id="semester"
            v-model="semester"
            name="semester"
            :class="[
              'mt-2.5 block w-full rounded-md border-0 py-2 pl-3 pr-10 bg-gray-700 text-primary',
              'ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-secondary-600',
              'sm:mt-0 sm:text-sm sm:leading-6',
            ]"
          >
            <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
        <ErrorMessage :error="errors.semester" />
      </div>
      <div class="sm:col-span-2">
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div>
            <p class="block text-primary font-semibold leading-6">
              ¿Eres miembro de la comunidad BUAP?
            </p>
            <p class="block text-xs text-gray-400 leading-3 italic">
              Si eres estudiante, egresado, docente o personal, selecciona 'Sí'
            </p>
          </div>
          <div class="flex items-center justify-center gap-1">
            <p class="align-middle text-primary font-semibold leading-3">No</p>
            <div class="mx-5 sm:mx-2">
              <Toggle v-model="fromBuap" name="fromBuap" />
            </div>
            <p class="align-middle text-primary font-semibold leading-3">Sí</p>
          </div>
        </div>
      </div>
      <div :class="[{ hidden: fromBuap }, 'sm:col-span-2']">
        <label for="schoolOfOrigin" class="block text-primary font-semibold leading-6">
          Escuela de origen
        </label>
        <div class="mt-2.5">
          <input
            id="schoolOfOrigin"
            v-model="schoolOfOrigin"
            type="text"
            name="schoolOfOrigin"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.schoolOfOrigin" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="whatToExpect" class="block text-primary font-semibold leading-6">
          ¿Qué esperas del Lobo Hackathon?
        </label>
        <div class="mt-2.5">
          <textarea
            id="whatToExpect"
            v-model="whatToExpect"
            name="whatToExpect"
            rows="3"
            :class="[
              'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm',
              'ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-500',
              'sm:text-sm sm:leading-6',
            ]"
          />
          <ErrorMessage :error="errors.whatToExpect" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div>
            <p class="block text-primary font-semibold leading-6">
              ¿Es tu primera vez en un hackathon?
            </p>
          </div>
          <div class="flex items-center justify-center gap-1">
            <p class="align-middle text-primary font-semibold leading-3">No</p>
            <div class="mx-5 sm:mx-2">
              <Toggle v-model="firstTimer" name="firstTimer" />
            </div>
            <p class="align-middle text-primary font-semibold leading-3">Sí</p>
          </div>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="heardFrom" class="mb-2 block text-primary font-semibold leading-6">
          ¿Cómo te enteraste del Lobo Hackathon?
        </label>
        <select
          id="heardFrom"
          v-model="heardFrom"
          name="heardFrom"
          :class="[
            'mt-2.5 block w-full rounded-md border-0 py-2 pl-3 pr-10 bg-gray-700 text-primary',
            'ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-secondary-600',
            'sm:mt-0 sm:text-sm sm:leading-6',
          ]"
        >
          <option v-for="(option, key) in heardFromValues" :key="key" :value="key">
            {{ option }}
          </option>
        </select>
        <ErrorMessage :error="errors.heardFrom" />
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
          <span v-show="!isSubmitting"> Enviar </span>
        </button>
      </div>
    </div>
  </form>
</template>
