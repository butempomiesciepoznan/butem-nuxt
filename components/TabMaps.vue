<script setup>
const props = defineProps({
  tabMaps: {
    type: Array,
    required: true
  },
  placeUrl: {
    type: String,
    required: true
  }
});

const { tabMaps, placeUrl } = props;

</script>

<template>

  <div v-for="(tabMap, index) in tabMaps" :key="`tabMap-${index}`">
    <template v-if="tabMap.placeUrl === placeUrl">
      <p class="tw-text-sm tw-leading-7" >
        {{ tabMap.street }}, {{ tabMap.zipCode }} {{ tabMap.city }}
      </p>
      <iframe :src="tabMap.iframeSrc" width="100%" height="358" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </template>
  </div>

</template>