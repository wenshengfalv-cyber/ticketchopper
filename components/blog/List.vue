<script setup>
import { computed } from 'vue'
import { useBlogPosts } from '~/composables/useBlogPosts'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const { getAllPosts } = useBlogPosts()

const computedBlogPosts = computed(() => getAllPosts(locale.value))
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in computedBlogPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Date Badge -->
          <div class="bg-blue-600 text-white p-4 text-center">
            <div class="text-3xl font-bold">{{ post.date.day }}</div>
            <div class="text-sm uppercase">{{ post.date.month }}</div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              <a :href="`/${locale}/blog/${post.slug}`">
                {{ post.title }}
              </a>
            </h2>

            <!-- Meta Info -->
            <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {{ post.author }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {{ post.category }}
              </div>
            </div>

            <!-- Excerpt -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <!-- Read More Link -->
            <a
              :href="`/${locale}/blog/${post.slug}`"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {{ t('common.readMore') }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center">
        <div class="text-gray-500">
          {{ t('blogs.showAll') }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>