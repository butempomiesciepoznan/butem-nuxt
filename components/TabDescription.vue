<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
});

const { description } = props;
</script>

<template>
  <div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped></style>
