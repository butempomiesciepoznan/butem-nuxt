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
  <div class="carousel-wrapper">
    <v-carousel v-if="!!images && images.length" 
      width="100%"
      height="382"
      :show-arrows="false"
      hide-delimiter-background
      cycle
      class="custom-carousel-description"
    >
      <template v-for=" (image, index) in images" :key="`description-${index}`">
        <v-carousel-item v-if="image.src?.length && image.alt?.length" 
          :src="image.src"
          :alt="image.alt"
          cover
          height="382"
        >

        <div class="fake-previous-slide"></div>

        <div class="caption">
          <h3 class="caption-header">{{ image.header }}</h3>
          <p class="caption-description">{{ image.description }}</p>
        </div>

        <div class="fake-next-slide"></div>
        
        </v-carousel-item>
      </template>
    </v-carousel>
  </div>
</template>

<style>
.carousel-wrapper {
  position: relative;
  transform: translateX(0);
}

.carousel-wrapper .fake-previous-slide,
.carousel-wrapper .fake-next-slide {
  position: fixed;
  top: 20px;
  bottom: 40px;
  left: -16px;
  width: 16px;
  background-color: var(--light-grey);
}

.carousel-wrapper .fake-next-slide {
  left: unset;
  right: -16px;
}

.custom-carousel-description {
  width: calc(100% - 68px);
  margin: 0 auto;
}

.custom-carousel-description img {
  max-height: 234px;
}

.custom-carousel-description .caption {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 148px;
  padding: 8px 12px;
  background: var(--light-grey);
  color: var(--darken-grey); 
}

.custom-carousel-description .caption-header,
.custom-carousel-description .caption-description {
  margin: 0;
  text-align: left;
}

.custom-carousel-description .caption-header {
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
}

.custom-carousel-description .caption-description {
  margin-top: 5px;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
}
</style>