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
  <v-card-text class="pa-0"> {{ description }} </v-card-text>
</template>

<style scoped>
.v-card-text {
  font-size: 1rem;
  font-weight: 500;
  color: var(--black-color);
}

.v-card .v-card-text {
  line-height: var(--tab-text-line-height);
}
</style>
