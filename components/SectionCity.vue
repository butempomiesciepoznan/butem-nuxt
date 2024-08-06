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
  <div v-cloak class="tw-pt-4 tw-text-sm tw-leading-6">Wybrane miasto</div>
  <h1 v-cloak class="tw-pb-4 tw-font-medium tw-text-4xl tw-leading-[2.75rem]">Poznań</h1>
  <CarouselWithImages :images="images" />

  <p class="tw-mt-4 tw-text-sm tw-leading-6" :class="isExpanded ? '' : 'ellipsis'"
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