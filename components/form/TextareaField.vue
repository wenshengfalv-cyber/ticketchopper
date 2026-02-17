<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  rows: { type: [String, Number], default: 5 },
  required: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <textarea
    :rows="rows"
    :value="modelValue"
    @input="e => emit('update:modelValue', e.target.value)"
    :placeholder="placeholder"
    :required="required"
    class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>
</template>
