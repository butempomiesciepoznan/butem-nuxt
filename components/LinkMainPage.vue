<script setup>
const props = defineProps({
  cityName: String,
});
</script>

<template>
  <div class="container">
    <NuxtLink to="/">
      <v-icon icon="mdi-arrow-left" />
    </NuxtLink>
    <h2 v-cloak class="heading">{{ cityName }}</h2>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 12px 16px 4px;
}
.heading {
  font-size: 22px;
  margin-left: 15px;
}
</style>
