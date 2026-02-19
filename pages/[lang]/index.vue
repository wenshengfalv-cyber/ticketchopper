<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '~/composables/useSeo'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale, t } = useI18n()

const lang = route.params.lang || 'zh'
locale.value = lang

useSeo({
  title: t('meta.title'),
  description: t('meta.description')
})
</script>

<template>
  <!-- <HomeHeroCarousel /> -->
  <HomeHero />
  <HomeServices />
  <HomeTrafficViolations />
  <CaseGallery />
  <HomeStats />
  <HomeContactForm />
</template>
