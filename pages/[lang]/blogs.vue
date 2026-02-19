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
  title: `${t('blogs.title')} - ${t('meta.title')}`,
  description: t('blogs.desc')
})
</script>

<template>
  <div>
    <BlogHero />
    <BlogList />
    <HomeContactForm />
  </div>
</template>