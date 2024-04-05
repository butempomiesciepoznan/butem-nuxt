<script setup>
const props = defineProps({
  title: [Boolean, String],
  imageSrc: String,
  defaultTile: Boolean
})

</script>

<template>
  <div v-if="!props.defaultTile" class="relative h-[365px] w-full max-w-[304px] tile__wrapper">
    <h3 class="py-6 font-bold text-3xl tile__header">{{ props.title }}</h3>
    <NuxtPicture format="webp" :src="props.imageSrc" class="absolute top-0 right-0 left-0 bottom-0 tile__image">
    </NuxtPicture>
  </div>
  <div v-else
    class="relative flex flex-col justify-center items-center h-[365px] w-full max-w-[304px] tile__wrapper--default">
    <h3 class="max-w-[220px] py-6 font-bold text-3xl text-center">Kolejne miasto już niebawem</h3>
    <NuxtPicture format="webp" src="landing/klepsydra.png"></NuxtPicture>
  </div>
</template>

<style>
.tile__wrapper {
  transition: 0.2s;
  cursor: pointer;
}

.tile__wrapper:hover {
  transform: scale(1.05);
  box-shadow: 2px 2px 10px 2px #ddd;
  border-radius: 20px;
}

.tile__wrapper--default {
  background-color: var(--primary-color);
  border-radius: 20px;
  cursor: default;
}

.tile__header {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 158px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--primary-color);
  opacity: 0.8;
  z-index: 10;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
}

.tile__image {
  img {
    height: 100%;
  }
}
</style>