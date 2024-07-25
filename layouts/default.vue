<script setup>
let { isMobile } = useDeviceType()
  
</script>

<template>
  <div v-cloak class="mt-0 sm:mt-16 sm:mx-16 mx-4">
    <TheMainNav v-if="!isMobile"></TheMainNav>
    <slot />
    <TheFooterNav v-if="!isMobile"></TheFooterNav>
  </div>
</template>