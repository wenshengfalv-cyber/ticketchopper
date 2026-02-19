<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const trafficItems = [
  'speed',
  'sign',
  'handheld',
  'seatbelt',
  'suspension',
  'noInsurance'
]

const getDetailLink = (item) => {
  return `/${locale.value}/traffic/${item}`
}
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">{{ t('traffic.title') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="item in trafficItems"
          :key="item"
          :to="getDetailLink(item)"
          class="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer text-left"
        >
          <h3 class="text-lg font-bold text-blue-900 mb-2">
            {{ t(`traffic.items.${item}.title`) }}
          </h3>
          <p class="text-gray-700">
            {{ t(`traffic.items.${item}.desc`) }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
