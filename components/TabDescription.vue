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
  <v-card>
    <v-card-text>
      <p>{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  margin: 20px auto;
}
</style>
