<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const reasons = computed(() => [
  {
    icon: '⚖️',
    title: t(`whyChooseUs.reasons.legalExpertise.title`),
    desc: t(`whyChooseUs.reasons.legalExpertise.desc`)
  },
  {
    icon: '📅',
    title: t(`whyChooseUs.reasons.yearsofExperience.title`),
    desc: t(`whyChooseUs.reasons.yearsofExperience.desc`)
  },
  {
    icon: '🏆',
    title: t(`whyChooseUs.reasons.legalCertification.title`),
    desc: t(`whyChooseUs.reasons.legalCertification.desc`)
  }
])
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">
        {{ t('whyChooseUs.title') }}
      </h2>
      <p class="text-lg text-gray-600 text-center mb-12">
        {{ t('whyChooseUs.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(reason, idx) in reasons" :key="idx" class="bg-white p-8 rounded text-center shadow-md border-t-4 border-blue-900">
          <div class="text-5xl mb-4">{{ reason.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ reason.title }}</h3>
          <p class="text-gray-700">{{ reason.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
