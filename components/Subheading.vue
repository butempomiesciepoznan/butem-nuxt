<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
   <h2 class="mb-5 text-h5 font-weight-bold">{{ props.name }}</h2>
</template>



