<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
    validator: (value) => value.every((tag) => "name" in tag && "icon" in tag),
  },
});
</script>

<template>
  <v-chip append-icon="$vuetify" variant="flat" size="large"
    >Długie zdanie</v-chip
  >
</template>

<style scoped>
.v-chip {
  background-color: #ebebeb;
  color: #48464c;
  max-height: 24px;
}
</style>
