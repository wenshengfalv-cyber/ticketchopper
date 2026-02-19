<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
    <div class="absolute inset-0 opacity-10"></div>
    <div class="container mx-auto px-4 relative z-10">
      <nav class="flex items-center space-x-2 text-blue-200 mb-6">
        <NuxtLink :to="`/${locale}`" class="hover:text-white transition-colors">
          {{ t('common.home') }}
        </NuxtLink>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M8.59 16.58L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.58z"/>
        </svg>
        <span class="text-white">{{ t('common.faq') }}</span>
      </nav>

      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        {{ t('common.faq') }}
      </h1>
      <p class="text-xl text-blue-100">
        {{ t('common.frequentlyAsked') }}
      </p>
    </div>
  </section>
</template>
