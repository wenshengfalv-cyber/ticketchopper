<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Generate array of case images (1-40) using placeholder service
const caseImages = computed(() => {
  const images = []
  
  for (let i = 1; i <= 40; i++) {
    images.push({
      id: i,
      // Using picsum.photos as a placeholder - replace with your actual images
      src: `/images/cases/case-${i}.jpg`,
      thumb: `/images/cases/case-${i}.jpg`, // Smaller thumbnail for grid
      alt: `Case ${i}`,
      title: `Case Study ${i}`
    })
  }
  return images
})

const selectedImage = ref(null)
const imageLoaded = ref(false)
const isZoomed = ref(false)

const openLightbox = (image) => {
  selectedImage.value = image
  imageLoaded.value = false
  isZoomed.value = false
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  imageLoaded.value = false
  isZoomed.value = false
  // Restore body scroll
  document.body.style.overflow = ''
}

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}

const onImageLoad = () => {
  imageLoaded.value = true
}

const goToNext = () => {
  if (!selectedImage.value) return
  const currentIndex = caseImages.value.findIndex(img => img.id === selectedImage.value.id)
  if (currentIndex < caseImages.value.length - 1) {
    selectedImage.value = caseImages.value[currentIndex + 1]
    imageLoaded.value = false
    isZoomed.value = false
  }
}

const goToPrev = () => {
  if (!selectedImage.value) return
  const currentIndex = caseImages.value.findIndex(img => img.id === selectedImage.value.id)
  if (currentIndex > 0) {
    selectedImage.value = caseImages.value[currentIndex - 1]
    imageLoaded.value = false
    isZoomed.value = false
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!selectedImage.value) return
  
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    goToNext()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    goToPrev()
  } else if (e.key === 'Escape') {
    e.preventDefault()
    closeLightbox()
  }
}

// Add keyboard event listener when lightbox is open
watch(selectedImage, (newValue) => {
  if (newValue) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="case-gallery bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {{ t('caseGallery.title') }}
        </h2>
        <p class="text-lg text-gray-600 text-center">
          {{ t('caseGallery.description') }}
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="image in caseImages"
          :key="image.id"
          class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
          @click="openLightbox(image)"
        >
          <!-- Image Container with aspect ratio -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="image.thumb"
              :alt="image.alt"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p class="font-semibold text-sm">{{ image.title }}</p>
              </div>
            </div>

            <!-- Zoom icon overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="bg-white/90 p-3 rounded-full shadow-lg">
                <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        @click.self="closeLightbox"
      >
        <!-- Close Button (Top Right) -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Image Container -->
        <div class="relative w-full h-full flex items-center justify-center p-4 md:p-8">
          <!-- Loading Spinner -->
          <div v-if="!imageLoaded" class="absolute inset-0 flex items-center justify-center">
            <div class="animate-spin rounded h-12 w-12 border-4 border-white border-t-transparent"></div>
          </div>

          <!-- Main Image -->
          <div 
            class="relative max-w-7xl max-h-full mx-auto transition-all duration-300"
            :class="isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
            @click="toggleZoom"
          >
            <img
              :src="selectedImage.src"
              :alt="selectedImage.alt"
              @load="onImageLoad"
              class="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded shadow transition-all duration-300"
              :class="[
                imageLoaded ? 'opacity-100' : 'opacity-0',
                isZoomed ? 'scale-150 md:scale-200' : 'scale-100'
              ]"
            />
          </div>

          <!-- Previous Button -->
          <button
            v-if="caseImages.findIndex(img => img.id === selectedImage.id) > 0"
            @click.stop="goToPrev"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            v-if="caseImages.findIndex(img => img.id === selectedImage.id) < caseImages.length - 1"
            @click.stop="goToNext"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Bottom Info Bar -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between text-white">
              <!-- Image Counter -->
              <div class="flex items-center space-x-2">
                <span class="text-sm md:text-base font-medium">
                  {{ caseImages.findIndex(img => img.id === selectedImage.id) + 1 }} / {{ caseImages.length }}
                </span>
              </div>

              <!-- Image Title -->
              <div class="hidden md:block">
                <p class="text-lg font-semibold">{{ selectedImage.title }}</p>
              </div>

              <!-- Zoom Toggle -->
              <button
                @click.stop="toggleZoom"
                class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg v-if="!isZoomed" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
                <span class="text-sm hidden md:inline">{{ isZoomed ? t('caseGallery.zoomOut') : t('caseGallery.zoomIn') }}</span>
              </button>
            </div>

            <!-- Keyboard Shortcuts Hint -->
            <div class="mt-3 text-center text-white/60 text-xs md:text-sm">
              {{ t('caseGallery.keyboardShortcut') }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth aspect ratio container */
.aspect-\[4\/3\] {
  aspect-ratio: 4 / 3;
}

/* Custom scrollbar for zoomed images */
.scale-150,
.scale-200 {
  overflow: auto;
}

/* Prevent selection on double click */
img {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
</style>