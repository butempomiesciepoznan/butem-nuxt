<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
    validator: (value) => value.every((tag) => ("name" in tag && "icon" in tag))
  },
});

const { tags } = props

</script>

<template>
  <div class="tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-my-2">
    <v-chip
      v-for="(tag, index) in tags"
      :key="`tag-${index}`"
      :prepend-icon="tag.icon"
      variant="outlined"
      size="large"
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<style scoped>
.v-chip {
  color: var(--grey-tag);
  border: 1px solid var(--medium-grey);
  border-radius: 1px;
  max-height: 32px;
}
</style>