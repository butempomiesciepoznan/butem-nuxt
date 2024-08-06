<script setup>
const route = useRoute();
const config = useRuntimeConfig();
let { isMobile } = useDeviceType();

const images = ref([
  {
    src: '/img/foto1.svg',
    alt: 'foto 1',
    header: 'Nazwa trasy 1',
    description: 'Krótki opis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  },
  {
    src: '/img/foto2.svg',
    alt: 'foto 2',
    header: 'Nazwa trasy 2',
    description: 'Krótki opis2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  },
  {
    src: '/img/foto3.svg',
    alt: 'foto 3',
    header: 'Nazwa trasy 3',
    description: 'Krótki opis3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et domage.'
  }
]);

const description = ref('');
description.value =
  'Suspendisse eu ligula. Curabitur vestibulum aliquam leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Morbi ac felis. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Aenean vulputate eleifend tellus. Suspendisse eu ligula. Curabitur vestibulum aliquam leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Morbi ac felis. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Aenean vulputate eleifend tellus.';

const routesTitle = 'Trasy';

</script>
<template>
  <template v-cloak v-if="isMobile">
    <SectionCity :images="images" :description="description"/>
    <SectionRoutes :images="images" :name="routesTitle"/>
  </template>

  <template v-else-if="isMobile === null"></template>

  <template v-cloak v-else>
    <div class="w-screen h-[430px] -mt-1 -mx-16">
      <NuxtPicture
        format="webp"
        src="images/landing/pexels-jakub-zerdzicki-19736144.jpg"
        :imgAttrs="{ class: 'w-screen h-full image__size--full' }"
      />
      <UContainer class="relative">
        <h1 class="absolute bottom-5 left-0 header__header--one">
          Eksploruj skarby miasta
        </h1>
      </UContainer>
    </div>

    <UContainer>
      <section>
        <h2 class="w-full mt-32 mb-16 font-bold text-4xl">Zwiedzaj miasto</h2>
        <div class="flex justify-between gap-x-8 section__wrapper">
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
        <h2 class="w-full mt-32 mb-16 font-bold text-4xl">
          Zobacz najpopularniejsze atrakcje
        </h2>
        <div class="flex justify-between gap-x-8 section__wrapper">
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

      <section class="mb-[80px]">
        <h2 class="w-full mt-32 mb-16 font-bold text-4xl">Podążaj trasą</h2>
        <div class="flex justify-between gap-x-8 section__wrapper">
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
    </UContainer>
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
  font-size: 56px;
  font-weight: 700;
  background-color: rgba(27, 30, 46, 0.73);
  border-radius: 20px;
}
</style>
