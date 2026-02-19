<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const teamMembers = computed(() => [
  { icon: '👨‍⚖️', title: t('team.members.criminalLawyers.title'), desc: t('team.members.criminalLawyers.desc') },
  { icon: '🚗', title: t('team.members.trafficLaw.title'), desc: t('team.members.trafficLaw.desc') },
  { icon: '👮', title: t('team.members.lawEnforcement.title'), desc: t('team.members.lawEnforcement.desc') },
])
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ t("team.title") }}
      </h2>

      <div class="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900">
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ t("team.subtitle") }}
        </p>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="member in teamMembers" :key="member.title" class="text-center p-4 bg-blue-50 rounded">
            <div class="text-4xl mb-2">{{ member.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ member.title }}</h3>
            <p class="text-sm text-gray-600">{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>