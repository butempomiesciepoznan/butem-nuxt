<script setup>
let { isMobile } = useDeviceType()
  
</script>

<template>
  <div v-cloak class="tw-mt-0 sm:tw-mt-16">
    <TheMainNav v-if="!isMobile"></TheMainNav>
    <slot />
    <TheFooterNav v-if="!isMobile"></TheFooterNav>
  </div>
</template>