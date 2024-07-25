<script setup>
const config = useRuntimeConfig()
const { data: items, pending, error, refresh } = await useFetch(`${config.public.wordpressUrl}/footer-nav`)
const filteredItems = items.value?.filter(el => el.name !== "Strona główna")

</script>

<template>
  <nav v-cloak class="w-screen sm:-mx-16 -mx-4 px-16 py-6 ">
    <UContainer class="flex items-center justify-between">
      <NuxtLink to="/">
        <img width="109" height="64" src="public/images/butem-logo-inversed.png" alt="Logo witryny">
      </NuxtLink>

      <div v-for="item in filteredItems" :key="item.name">
        <NuxtLink :to="item.href" :class="item.classes">
          <span v-if="item.name === 'IT in Practice'" class="font-normal">Designed by {{ item.name }} ©</span>
          <span v-else class="font-bold">{{ item.name }}</span>
        </NuxtLink>
      </div>
    </UContainer>
  </nav>
</template>

<style scoped>
nav {
  color: var(--white-color);
  background-color: var(--dark-grey);
}
</style>