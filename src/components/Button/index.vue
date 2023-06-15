<script setup lang="ts">
defineProps<{
  text: string;
  addStyle?: string;
  loading: boolean;
}>();
</script>
<template>
  <button
    :disabled="loading"
    :class="`w-full text-white ${loading ? 'bg-gray-200' : 'bg-blue-600'} ${
      !loading && 'hover:bg-blue-700'
    }  focus:ring-2 focus:cursor-auto focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center ${addStyle}`"
    v-bind="$attrs"
  >
    <span v-if="!loading">{{ text }}</span>
    <div
      v-if="loading"
      class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent border-blue-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  </button>
</template>
