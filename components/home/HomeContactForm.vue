<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import InputField from '../form/InputField.vue'
import TextareaField from '../form/TextareaField.vue'

const { t } = useI18n()
const route = useRoute()

defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)
const error = ref('')
const loading = ref(false)

const submitForm = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await fetch('/api/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.statusMessage || 'Failed to submit form')
    }

    submitted.value = true
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }

    // Reset success message after 5 seconds
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  } catch (err: any) {
    error.value = err.message || 'An error occurred while submitting the form'
    console.error('Form submission error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
          {{ t('contact.freeConsultation') }}
        </h2>
        <p class="text-center text-blue-100 mb-8">
          {{ t('contact.discussCase') }}
        </p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField v-model="form.name" :placeholder="t('contact.yourName')" required />
            <InputField v-model="form.email" type="email" :placeholder="t('contact.yourEmail')" required />
          </div>

          <InputField v-model="form.phone" type="tel" :placeholder="t('contact.yourPhone')" required />

          <InputField v-model="form.subject" :placeholder="t('contact.subject')" />

          <TextareaField v-model="form.message" :placeholder="t('contact.message')" rows="5" required />

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:hover:scale-100"
          >
            {{ loading ? t('contact.submitting') : t('contact.submit') }}
          </button>

          <div v-if="submitted" class="text-center text-green-300 bg-green-900 bg-opacity-20 p-3 rounded">
            {{ t('contact.thankYou') }}
          </div>

          <div v-if="error" class="text-center text-red-300 bg-red-900 bg-opacity-20 p-3 rounded">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
