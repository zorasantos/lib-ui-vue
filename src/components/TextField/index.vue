<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label?: string;
  id?: string;
  errorMessages?: string | undefined;
  modelValue?: string | number;
}>();

const inputFocus = ref(false);

const handleFocus = () => {
  inputFocus.value = true;
};

const handleBlur = () => {
  inputFocus.value = false;
};
</script>
<template>
  <div class="mb-8">
    <label :for="id" class="sr-only">{{ label }}</label>
    <div class="relative">
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="(event: Event) => $emit(`update:modelValue`, (event.target as HTMLInputElement).value)"
        @focus="handleFocus()"
        @blur="handleBlur()"
        :class="`h-14 bg-zinc-100 hover:bg-zinc-200 rounded-t-md block w-full p-2.5 ${
          !inputFocus && 'placeholder-transparent'
        } placeholder-gray-400 focus:outline-none border-b focus:bg-[#D6D6D6]`"
      />
      <label
        :for="id"
        :class="`absolute left-3 transition-all ${
          modelValue || inputFocus
            ? 'text-neutral-950 text-xs -translate-y-3 top-3'
            : 'text-base text-gray-500 -translate-y-1 top-[35%]'
        } ${errorMessages ? 'text-red-500' : 'text-gray-600'}`"
      >
        {{ label }}
      </label>
    </div>

    <span class="text-red-500 text-xs font-semibold" v-if="errorMessages">{{
      errorMessages
    }}</span>
  </div>
</template>
