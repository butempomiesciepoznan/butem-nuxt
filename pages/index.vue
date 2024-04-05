<script setup>
const route = useRoute()
const config = useRuntimeConfig()

</script>
<template>
  <div class="w-screen h-[430px] -mt-1 -mx-16">
    <NuxtPicture format="webp" src="landing/pexels-jakub-zerdzicki-19736144.jpg"
      :imgAttrs="{ class: 'w-screen h-full image__size--full' }" />
    <UContainer class="relative">
      <h1 class="absolute bottom-5 left-0 header__header--one">Eksploruj skarby miasta</h1>
    </UContainer>
  </div>

  <UContainer>
    <section>
      <h2 class="w-full mt-32 mb-16 font-bold text-4xl">Zwiedzaj miasto</h2>
      <div class="flex justify-between gap-x-8 section__wrapper">
        <ShortSectionTile imageSrc='landing/mini-poznan.png' title="Poznań" />
        <ShortSectionTile imageSrc="" title="" defaultTile />
        <ShortSectionTile imageSrc="" title="" defaultTile />
        <ShortSectionTile imageSrc="" title="" defaultTile />
      </div>
    </section>

    <section>
      <h2 class="w-full mt-32 mb-16 font-bold text-4xl">Zobacz najpopularniejsze atrakcje</h2>
      <div class="flex justify-between gap-x-8 section__wrapper">
        <ShortSectionTile imageSrc='landing/mini-domki-budnicze.png' title="Domki budnicze" />
        <ShortSectionTile imageSrc="landing/mini-ratusz-poznanski.png" title="Ratusz Poznański" />
        <ShortSectionTile imageSrc="landing/mini-katedra-poznanska.png" title="Katedra Poznańska" />
        <ShortSectionTile imageSrc="landing/mini-kantor-antoniego.png" title="Kantor Antoniego Krzyżanowskiego" />
      </div>
    </section>

    <section class="mb-[80px]">
      <h2 class="w-full mt-32 mb-16 font-bold text-4xl">Podążaj trasą</h2>
      <div class="flex justify-between gap-x-8 section__wrapper">
        <ShortSectionTile imageSrc='landing/mini-ostrow-tumski.png' title="Ostrów Tumski" />
        <ShortSectionTile imageSrc="landing/mini-stare-miasto.png" title="Stare Miasto w Poznaniu" />
        <ShortSectionTile imageSrc="" title="" defaultTile />
        <ShortSectionTile imageSrc="" title="" defaultTile />
      </div>
    </section>
  </UContainer>
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