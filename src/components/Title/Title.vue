<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <h1 className="text-2xl font-bold">{{ name }}</h1>
</template>
