<template>
  <v-carousel>
    <v-carousel-item
      v-for="(slide, index) in slides"
      :key="index"
      :src="item.src"
      cover
    >
      <div class="caption">
        <h2>{{ slide.caption.header }}</h2>
        <p>{{ slide.caption.intro }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      
    },
  },
};
</script>

<style scoped>
.caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}

.caption h2,
.caption p {
  margin: 0;
}
</style>