<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true,
  }
});

const { name, images } = props;
</script>

<template>
  <Subheading :name="name" class="tw-mt-8" />
  <CarouselWithDescription :images="images" />
</template>