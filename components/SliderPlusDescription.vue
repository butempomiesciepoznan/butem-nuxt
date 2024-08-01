<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slide, index) in props.slides"
      :key="index"
    >
      <img :src="slide.src" :alt="slide.alt" class="carousel-img" />
      <div class="caption">
        <h2>{{ slide.caption.header }}</h2>
        <p>{{ slide.caption.intro }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 370px;
  object-fit: cover;
  background-color: var(--grey-background);
}

.caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-grey);
  color: var(--white-color); 
  padding: 10px;
  text-align: center;
  width: calc(100% - 40px);
}

.caption h2,
.caption p {
  margin: 0;
  text-align: left;
}

.caption h2 {
  font-size: 1.5em;
  line-height: var(--tab-title-line-height);
  letter-spacing: var(--tab-title-letter-spacing);
}

.caption p {
  font-size: 1em;
  line-height: var(--tab-text-line-height);
}

.v-carousel .v-carousel__controls__item {
  width: var(--carousel-dot-width);
  height: var(--carousel-dot-width);
}
</style>
