<script setup>
import { useI18n } from 'vue-i18n'
import { COMPANY_ADDRESS, PHONE_NUMBER, WECHAT_NUMBER, WECHAT_QR } from '../../constant/text';

const { t } = useI18n()
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Information -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ t('common.contactInfo') }}
          </h2>
          <p class="text-gray-600 text-lg mb-12">
            {{ t('common.reachOut') }}
          </p>

          <div class="space-y-6">
            <!-- Phone -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900 text-white shadow-lg">
                    <span class="text-2xl">📞</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ t('common.phone') }}
                  </h3>
                  <a :href="`tel:${PHONE_NUMBER}`" class="text-blue-900 hover:text-blue-700 font-semibold text-lg transition-colors">
                    {{ PHONE_NUMBER }}
                  </a>
                  <p class="text-gray-600 text-sm mt-1">
                    {{ t('common.available') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- WeChat -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-900 text-white shadow-lg">
                    <span class="text-2xl">💬</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ t('common.wechat') }}
                  </h3>
                  <p class="text-blue-900 font-semibold text-lg">{{ WECHAT_NUMBER }}</p>
                  <img :src="WECHAT_QR" alt="wechat qr code" class="rounded w-[300px]" />
                  <p class="text-gray-600 text-sm mt-1">
                    {{ t('common.preferred') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Address -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-red-500 to-red-900 text-white shadow-lg">
                    <span class="text-2xl">📍</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ t('common.officeAddress') }}
                  </h3>
                  <p class="text-gray-700 font-semibold leading-relaxed">{{ COMPANY_ADDRESS }}</p>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-900 text-white shadow-lg">
                    <span class="text-2xl">🕐</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ t('common.officeHours') }}
                  </h3>
                  <p class="text-gray-700 font-medium leading-relaxed">
                    {{ t('common.monFri') }}<br />
                    {{ t('common.satSun') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ t('common.ourLocation') }}
          </h2>
          <p class="text-gray-600 text-lg mb-8">
            {{ t('common.findMap') }}
          </p>
          <div class="rounded overflow-hidden shadow h-96 border border-gray-200">
            <iframe
              class="w-full h-full"
              style="border: 0;"
              loading="lazy"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.3887826463837!2d-79.8527!3d43.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1e6c0b0b0b0b%3A0x0!2s203-1943%20Ironoak%20Way%2C%20Oakville%2C%20ON%20L6H%203V7!5e0!3m2!1sen!2sca!4v1675000000000&z=15&output=embed"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
