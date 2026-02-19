<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style="animation-delay: 2s;"></div>
    
    <div class="relative container mx-auto px-4 text-center">
      <!-- Badge -->
      <div class="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50">
        <p class="text-sm font-semibold text-blue-200">
          {{ t('common.available247') }}
        </p>
      </div>
      
      <h1 class="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
        {{ t('contact.title') }}
      </h1>
      <p class="text-xl md:text-2xl text-blue-100 mx-auto leading-relaxed">
        {{ t('contact.desc') }}
      </p>
    </div>
  </section>
</template>
