<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
   <h2 class="mb-5">{{ props.name }}</h2>
</template>



