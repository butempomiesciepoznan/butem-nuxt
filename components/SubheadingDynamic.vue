<script setup>
const props = defineProps({
  placeUrl: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
});

const { placeUrl, images } = props;

images.forEach((image) => {
  let hrefSplit = image.href.split('/');
  return image.href = hrefSplit[hrefSplit.length - 1]
});

</script>

<template>
  <div v-for="(image, index) in images" :key="`name-${index}`">
    <template v-if="image.href === placeUrl">
      <h2 class="tw-mb-6 tw-mt-6 tw-text-2xl tw-font-semibold">{{ image.header }}</h2>
    </template>
  </div>
</template>



