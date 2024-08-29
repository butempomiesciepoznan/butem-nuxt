<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const { images } = props

</script>

<template>
  <v-carousel v-if="!!images && images.length" 
    width="100%"
    height="445"
    :show-arrows="false"
    hide-delimiter-background
    cycle
    class="custom-carousel"
  >
    <template v-for=" (image, index) in images" :key="`image-${index}`">
      <v-carousel-item v-if="image.src?.length && image.alt?.length" 
        :src="image.src"
        :alt="image.alt"
        cover
        height="421"
      >
      </v-carousel-item>
    </template>
  </v-carousel>
</template>