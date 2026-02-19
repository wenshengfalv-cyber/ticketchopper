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
  title: `${t('faq.title')} - ${t('meta.title')}`,
  description: t('faq.subtitle')
})
</script>

<template>

  <div>

    <FaqHero />

    <FaqContent />

    <HomeContactForm />

  </div>

</template>
