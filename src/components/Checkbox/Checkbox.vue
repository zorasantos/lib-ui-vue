<script setup lang="ts">
defineProps<{
  label: string;
  errorMessages?: string | undefined;
  modelValue?: boolean;
}>();
</script>
<template>
  <div class="flex items-center">
    <input
      id="checkbox"
      type="checkbox"
      v-bind="$attrs"
      :checked="modelValue"
      @input="(event: Event) => $emit(`update:modelValue`, (event.target as HTMLInputElement).checked)"
      class="w-4 h-4 cursor-pointer border-8 text-blue-500 bg-gray-100 rounded"
    />
    <label
      for="checkbox"
      :class="`ml-2 block text-base font-medium ${
        errorMessages ? 'text-red-500' : 'text-gray-600'
      }`"
      >{{ label }}</label
    >
  </div>
  <span class="text-red-500 text-xs font-semibold" v-if="errorMessages">{{
    errorMessages
  }}</span>
</template>
