<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
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

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    submitted.value = false
  }, 2000)
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
            class="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            {{ t('contact.submit') }}
          </button>

          <div v-if="submitted" class="text-center text-green-300">
            {{ t('contact.thankYou') }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
