
<script setup>
import { defineProps } from 'vue';

  const props = defineProps({
    slides: {
      type: Array,
      required: true,
    },
  })

  const { slides } = props


</script>



<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slide, index) in slides"
      :key="index"
      :src="slide.src"
      :alt="slide.alt"
      :height = "370"
      cover
    >
      <div class="caption">
        <h2>{{ slide.caption.header }}</h2>
        <p>{{ slide.caption.intro }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>


<style>
.caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}

.caption h2,
.caption p {
  margin: 0;
}
</style>