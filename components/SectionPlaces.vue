<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true
  }
});

const { name, images } = props;
</script>

<template>
  <Subheading :name="name" class="tw-mt-12" />
  <CarouselWithDescription :images="images" />
  <TagMainPage :tags="tags" />
</template>