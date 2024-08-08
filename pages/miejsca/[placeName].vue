<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const placeName = ref('');

let { isMobile } = useDeviceType();

const images = ref([
  {
    src: '/img/foto1.svg',
    alt: 'foto 1',
    header: 'Domki budnicze',
    description: 'Krótki opis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.',
    href: '/miejsca/domki-budnicze'
  },
  {
    src: '/img/foto2.svg',
    alt: 'foto 2',
    header: 'Katedra poznańska',
    description: 'Krótki opis2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.',
    href: '/miejsca/katedra-poznanska'
  },
  {
    src: '/img/foto3.svg',
    alt: 'foto 3',
    header: 'Ratusz poznański',
    description: 'Krótki opis3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.',href: '/miejsca/ratusz-poznanski'
  }
]);

const tags = ref([
  {
    name: 'Wejście płatne',
    icon: 'mdi-credit-card-outline'
  },
  {
    name: 'Wózki',
    icon: 'mdi mdi-baby-carriage-off'
  },
  {
    name: 'Toalety',
    icon: 'mdi mdi-toilet'
  },
  {
    name: 'Tag 4',
    icon: 'mdi mdi-check'
  },
]);

const cityName = 'Poznań';

if (route.params.placeName.length > 0) {
  placeName.value = route.params.placeName
} else {
  placeName.value = 'Lista miejsc';
  await navigateTo('/');
}

</script>

<template>
  <template v-cloak v-if="isMobile">
    <LinkMainPage :cityName="cityName" />
    <CarouselWithImages :images="images" />
    <SubheadingDynamic :placeUrl="route.params.placeName" :images="images" />
    <TagPopularPlace :tags="tags" />
    <Tabs :placeUrl="route.params.placeName" />
  </template>

  <template v-else-if="isMobile === null"></template>

  <template v-cloak v-else>
    <div class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16 tw-mt-40 wrapper-container">
      <h2 class="tw-mt-8 tw-text-2xl">{{ $route.params.placeName }}</h2>
    </div>
  </template>

</template>

<style scoped>
  .wrapper-container {
    min-height: calc(100vh - 260px);
  }
</style>