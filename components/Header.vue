<script setup>
const props = defineProps({
  title: String,
  content: String
})
</script>

<template>
  <h2 v-cloak class="tw-py-6 tw-font-bold tw-text-3xl">{{ title }}</h2>
  <p v-cloak>{{ content }}</p>
</template>

<style scoped>
p {
  height: calc(100vh - 315px);
}
</style>