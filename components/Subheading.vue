<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
   <h2 class="tw-mb-5 tw-text-2xl tw-font-bold">{{ props.name }}</h2>
</template>



