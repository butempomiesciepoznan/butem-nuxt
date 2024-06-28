<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
   <h5 class="mb-5 text-h5 font-weight-bold">{{ props.name }}</h5>
</template>



