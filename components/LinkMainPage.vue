<script setup>
const props = defineProps({
  cityName: String,
});
</script>

<template>
  <div class="container">
    <v-icon icon="mdi-arrow-left" />
    <h2>{{ cityName }}</h2>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
