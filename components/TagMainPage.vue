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
  <div class="tag-container">
    <v-chip
      v-for="(tag, index) in props.tags"
      :key="index"
      :append-icon="tag.icon"
      variant="flat"
      size="large"
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<style scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 25px 0;
}
.v-chip {
  background-color: var(--light-grey-background);
  color: var(--grey-tag);
  max-height: 24px;
}
</style>
