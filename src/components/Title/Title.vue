<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 className="text-2xl font-bold">{{ msg }}</h1>
</template>
