<script setup>
const config = useRuntimeConfig()
const { data: items, error, refresh } = await useFetch(`${config.public.wordpressUrl}/footer-nav`)
const filteredItems = items.value?.filter(el => el.name !== "Strona główna")

</script>

<template>
  <nav v-cloak class="tw-w-screen tw-px-16 tw-py-6 ">
    <div class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16 tw-flex tw-items-center tw-justify-between">
      <NuxtLink to="/">
        <img width="109" height="64" src="public/images/butem-logo-inversed.png" alt="Logo witryny">
      </NuxtLink>

      <div v-for="item in filteredItems" :key="item.name">
        <NuxtLink :to="item.href" :class="item.classes">
          <span v-if="item.name === 'IT in Practice'" class="tw-font-normal">Designed by {{ item.name }} ©</span>
          <span v-else class="tw-font-bold">{{ item.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  color: var(--white-color);
  background-color: var(--dark-grey);
}
</style>