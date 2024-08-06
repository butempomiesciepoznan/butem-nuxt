<script setup>
const route = useRoute();
const config = useRuntimeConfig();
let { isMobile } = useDeviceType();

const images = ref([
  {
    src: '/img/foto1.svg',
    alt: 'foto 1',
    header: 'Nazwa 1',
    description: 'Krótki opis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  },
  {
    src: '/img/foto2.svg',
    alt: 'foto 2',
    header: 'Nazwa 2',
    description: 'Krótki opis2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  },
  {
    src: '/img/foto3.svg',
    alt: 'foto 3',
    header: 'Nazwa 3',
    description: 'Krótki opis3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  }
]);

const tags = ref([
  {
    name: 'Tag 1 km',
    icon: ''
  },
  {
    name: 'Tag 2',
    icon: 'mdi mdi-check'
  },
  {
    name: 'Tag 3',
    icon: 'mdi mdi-close'
  },
  {
    name: 'Tag 4',
    icon: 'mdi mdi-check'
  },
]);

const description = ref('');
description.value =
  'Suspendisse eu ligula. Curabitur vestibulum aliquam leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Morbi ac felis. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Aenean vulputate eleifend tellus. Suspendisse eu ligula. Curabitur vestibulum aliquam leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Morbi ac felis. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Aenean vulputate eleifend tellus.';

const routesTitle = 'Trasy';
const placesTitle = 'Popularne miejsca';

</script>
<template>
  <template v-cloak v-if="isMobile">
    <SectionCity :images="images" :description="description" />
    <SectionRoutes :images="images" :name="routesTitle" />
    <SectionPlaces :images="images" :name="placesTitle" :tags="tags" />
  </template>

  <template v-else-if="isMobile === null"></template>

  <template v-cloak v-else>
    <div class="tw-w-screen tw-h-[430px] -tw-mt-1">
      <NuxtPicture
        format="webp"
        src="images/landing/pexels-jakub-zerdzicki-19736144.jpg"
        :imgAttrs="{ class: 'tw-w-screen tw-h-full image__size--full' }"
      />
      <div class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16 tw-relative">
        <h1 class="tw-absolute tw-bottom-5 tw-left-16 header__header--one">
          Eksploruj skarby miasta
        </h1>
      </div>
    </div>

    <main class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16">
      <section>
        <h2 class="tw-w-full tw-mt-32 tw-mb-16 tw-font-bold tw-text-4xl">Zwiedzaj miasto</h2>
        <div class="tw-flex md:tw-flex-wrap xl:tw-flex-nowrap xl:tw-justify-between tw-gap-8 section__wrapper">
          <ShortSectionTile
            imageSrc="images/landing/mini-poznan.png"
            title="Poznań"
          />
          <ShortSectionTile imageSrc="" title="" defaultTile />
          <ShortSectionTile imageSrc="" title="" defaultTile />
          <ShortSectionTile imageSrc="" title="" defaultTile />
        </div>
      </section>

      <section>
        <h2 class="tw-w-full tw-mt-32 tw-mb-16 tw-font-bold tw-text-4xl">
          Zobacz najpopularniejsze atrakcje
        </h2>
        <div class="tw-flex md:tw-flex-wrap xl:tw-flex-nowrap xl:tw-justify-between tw-gap-8 section__wrapper">
          <ShortSectionTile
            imageSrc="images/landing/mini-domki-budnicze.png"
            title="Domki budnicze"
          />
          <ShortSectionTile
            imageSrc="images/landing/mini-ratusz-poznanski.png"
            title="Ratusz Poznański"
          />
          <ShortSectionTile
            imageSrc="images/landing/mini-katedra-poznanska.png"
            title="Katedra Poznańska"
          />
          <ShortSectionTile
            imageSrc="images/landing/mini-kantor-antoniego.png"
            title="Kantor Antoniego Krzyżanowskiego"
          />
        </div>
      </section>

      <section class="tw-mb-[80px]">
        <h2 class="tw-w-full tw-mt-32 tw-mb-16 tw-font-bold tw-text-4xl">Podążaj trasą</h2>
        <div class="tw-flex md:tw-flex-wrap xl:tw-flex-nowrap xl:tw-justify-between tw-gap-8 section__wrapper">
          <ShortSectionTile
            imageSrc="images/landing/mini-ostrow-tumski.png"
            title="Ostrów Tumski"
          />
          <ShortSectionTile
            imageSrc="images/landing/mini-stare-miasto.png"
            title="Stare Miasto w Poznaniu"
          />
          <ShortSectionTile imageSrc="" title="" defaultTile />
          <ShortSectionTile imageSrc="" title="" defaultTile />
        </div>
      </section>
    </main>
  </template>
</template>

<style>
.image__size--full {
  object-fit: cover;
  object-position: bottom;
}

.header__header--one {
  padding: 5px 20px;
  color: var(--white-color);
  font-size: 55px;
  font-weight: 700;
  background-color: rgba(27, 30, 46, 0.73);
  border-radius: 20px;
}
</style>
