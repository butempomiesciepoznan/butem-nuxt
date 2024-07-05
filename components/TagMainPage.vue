<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
    validator: (value) => value.every(tag => 'name' in tag && 'icon' in tag)
  },
});
</script>

<template>
   <p>TEST</p>
 </template>

<style scoped>


</style>
