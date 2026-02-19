<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const clients = computed(() => [
  { name: 'Leo', title: t('clients.people.Leo')},
  { name: 'Ivan', title: t('clients.people.Ivan')},
  { name: 'Howard', title: t('clients.people.Howard')},
  { name: 'Mike', title: t('clients.people.Mike')},
  { name: 'Eric', title: t('clients.people.Eric')},
  { name: 'Jacky', title: t('clients.people.Jacky')},
  { name: 'Jeffrey', title: t('clients.people.Jeffrey')},
])
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">
        {{ t("clients.title") }}
      </h2>
      <p class="text-lg text-gray-600 text-center mb-12">
        {{ t("clients.subtitle") }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="client in clients" :key="client.name" class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center border border-blue-200">
          <div class="text-4xl mb-4">⭐</div>
          <h3 class="text-lg font-bold text-blue-900 mb-2">{{ client.name }}</h3>
          <p class="text-sm text-gray-700">{{ client.title }}</p>
        </div>
      </div>

      <div class="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-900">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ t("clients.anotherTitle") }}</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ t("clients.description") }}
        </p>
      </div>
    </div>
  </section>
</template>
