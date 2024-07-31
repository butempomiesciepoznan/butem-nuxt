<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
});

const { description, images } = props;

const textContainer = ref(null);
const initialTextHeight = 100;

let { isExpanded, textHeight, toggleTextLength } = useTextHeightToggle(initialTextHeight, textContainer);

</script>

<template>
  <div v-cloak class="pt-4 text-sm leading-6">Wybrane miasto</div>
  <h1 v-cloak class="pb-4 font-medium text-4xl leading-[2.75rem]">Poznań</h1>
  <CarouselWithImages :images="images" />

  <p class="mt-4 text-sm leading-6" :class="isExpanded ? '' : 'ellipsis'"
      ref="textContainer"
      :style="{
        height: textHeight + 'px',
        transition: 'height 0.4s',
        overflow: 'hidden',
      }"
  >
    {{ description }}
  </p>

  <ButtonPlusMore
    @increase-text="toggleTextLength"
    @decrease-text="toggleTextLength"
  />

</template>