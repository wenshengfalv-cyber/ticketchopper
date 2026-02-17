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
const currentLang = lang

useSeo({
  title: `${t('nav.about')} - ${t('meta.title')}`,
  description: t('whyChooseUs.description')
})
</script>

<template>
  <div>
    <AboutHero :current-lang="currentLang" />
    <AboutLeaderStory :current-lang="currentLang" />
    <AboutTeam :current-lang="currentLang" />
    <AboutClients :current-lang="currentLang" />
    <CaseGallery :current-lang="currentLang" />
    <AboutWhyChooseUs :current-lang="currentLang" />
    <HomeContactForm :current-lang="currentLang" />
  </div>
</template>
