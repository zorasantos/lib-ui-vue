<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";

interface ItemsProps {
  name: string;
  value: string | number;
}

defineProps<{
  label?: string;
  items: Array<ItemsProps>;
  modelValue?: string | number;
  errorMessages?: string;
}>();

const instance = getCurrentInstance();

const isOpen = ref(false);
const valueOption = ref("");
const inputFocus = ref(false);

const handleToggle = () => {
  isOpen.value = !isOpen.value;
  inputFocus.value = true;
};

const handleOptionClick = (value: ItemsProps) => {
  isOpen.value = false;
  valueOption.value = value.name;
  instance?.emit("update:modelValue", value.value);
};
</script>
<template>
  <div>
    <div class="relative mt-2">
      <button
        type="button"
        class="relative h-14 w-full cursor-point rounded-t-md bg-zinc-100 hover:bg-zinc-200 pl-3 pr-10 text-left shadow-sm focus:outline-none border-b focus:bg-[#D6D6D6]"
        aria-haspopup="listbox"
        aria-expanded="true"
        v-bind="$attrs"
        aria-labelledby="listbox-label"
        @click="handleToggle"
      >
        <span class="text-gray-500 font-normal">{{ valueOption }}</span>

        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <span
        :class="`absolute left-3 transition-all ${
          inputFocus
            ? 'text-neutral-950 text-xs -translate-y-3 top-4'
            : 'text-base text-gray-500 -translate-y-1 top-[35%]'
        } ${errorMessages && 'text-red-500'}`"
      >
        {{ label }}
      </span>

      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="text-gray-700 font-normal relative cursor-pointer hover:bg-gray-50 select-none py-2 pl-3 pr-9"
          role="option"
          @click="handleOptionClick(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <span class="text-red-500 text-xs font-semibold" v-if="errorMessages">{{
      errorMessages
    }}</span>
  </div>
</template>
