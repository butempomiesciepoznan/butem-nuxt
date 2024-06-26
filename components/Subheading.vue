<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="subheading__wrapper">
    <h2 class="subheading__header">{{ props.name }}</h2>
  </div>
</template>

<style>
.subheading__wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

.subheading__header {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1rem;
  transition: 0.2s;
}

</style>
