<script setup>
const config = useRuntimeConfig()
const { data: items, pending, error, refresh } = await useFetch(`${config.public.wordpressUrl}/main-nav`)
const filteredItems = items.value.filter(el => el.name !== "Strona główna")

</script>

<template>
  <nav v-cloak class="w-full fixed top-0 left-0 right-0 z-[100] px-16 py-6">
    <UContainer class="flex items-center justify-between">
      <NuxtLink to="/">
        <img width="109" height="64" src="public/images/butem-logo.png" alt="Logo witryny">
      </NuxtLink>
      <ul class="flex items-center gap-x-16">

        <li v-for="item in filteredItems" :key="item.name">
          <NuxtLink :to="item.href" :class="item.classes">
            <span class="font-bold">{{ item.name }}</span>
          </NuxtLink>
        </li>

      </ul>
    </UContainer>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--primary-color);
}

.cityblocks-icon,
.routes-icon,
.help-icon {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  min-width: 50px;
  min-height: 76px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 42px;
}

.cityblocks-icon {
  background-image: url('public/images/menu-logo-city-block.png');
}

.routes-icon {
  background-image: url('public/images/menu-logo-route.png');
}

.help-icon {
  background-image: url('public/images/menu-logo-help.png');
}
</style>