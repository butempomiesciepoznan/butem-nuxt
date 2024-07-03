<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  rel: {
    type: String,
    default: 'noopener'
  }
});
</script>

<template>
   <v-btn :href="href" :rel="rel" block variant="flat" rounded="lg" density="default" class="text-none mt-6"  >
      {{ name }}
   </v-btn>
 </template>

<style scoped>
.v-btn {
  background: var(--grey-backgroud);
  letter-spacing: var(--button-letter-spacing);
  line-height: var(--button-line-height);
  font-weight: 600;
}
</style>
