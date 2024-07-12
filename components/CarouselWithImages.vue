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
    <template v-for=" (image, index) in images" :key="index">
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

<style>
.custom-carousel .v-carousel__controls {
  max-height: 20px;
  background-color: var(--white-color);
}

.custom-carousel .v-carousel__controls .v-btn {
  width: var(--carousel-dot-width);
  height: var(--carousel-dot-width);
  color: var(--black-color);
}

.custom-carousel .v-carousel__controls .v-btn .v-icon {
  font-size: 1rem;
  opacity: 1;
}

.custom-carousel .v-btn--active .v-btn__overlay {
  background-color: transparent;
}

.custom-carousel .v-btn:not(.v-btn--active) .v-icon {
  font-size: 0.625rem;
  color: transparent;
  border: 1px solid var(--black-color);
  border-radius: 50%;
}
</style>