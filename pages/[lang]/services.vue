<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '~/composables/useSeo'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale, t } = useI18n()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang

useSeo({
  title: `${t('services.title')} - ${t('meta.title')}`,
  description: t('meta.description')
})
</script>

<template>
  <div>
    <HomeServices />
    <HomeContactForm />
  </div>
</template>
