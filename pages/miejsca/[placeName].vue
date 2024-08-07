<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const placeName = ref('');

if (route.params.placeName.length > 0) {
  placeName.value = route.params.placeName
} else {
  placeName.value = 'miejsca';
  await navigateTo('/');
}

</script>
<template>
  <div class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16 tw-mt-40">
    <Header :title="placeName" />
    <Tabs :placeUrl="route.params.placeName" />
  </div>
</template>