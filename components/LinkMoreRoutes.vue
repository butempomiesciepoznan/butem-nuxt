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
    default: 'noopener noreferrer'
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
  letter-spacing: 0.1px;
  line-height: 20px;
  font-weight: 600;
}
</style>
