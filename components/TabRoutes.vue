<script setup>
const props = defineProps({
  tabRoutes: {
    type: Array,
    required: true
  }
});

const { tabRoutes } = props;

</script>

<template>
  <div class="tw-flex tw-flex-wrap tw-gap-2">
    <template v-for="(route, index) in tabRoutes" :key="`route-${index}`">
      <v-card  variant="outlined" :href="route.href" rel="noopener" target="_blank" class="w-100 tw-mx-auto single-card-wrapper">
        <v-card-title class="d-flex justify-space-between align-center pr-0 tw-max-h-[80px]">
          <h3 class="tw-text-xl">{{ route.header }}</h3>
          <div class="tw-max-w-[80px]">
            <img :src="route.src" :alt="route.alt">
          </div>
        </v-card-title>
      </v-card>
    </template>
  </div>
</template>

<style scoped>
  .single-card-wrapper {
    background-color: var(--light-grey-background);
    border-color: var(--medium-grey);
  }
</style>