<script setup>
let { isMobile } = useDeviceType()
  
</script>

<template>
  <div v-cloak class="md:tw-mt-16 tw-mt-0 tw-mx-4 md:tw-mx-0">
    <TheMainNav v-if="!isMobile"></TheMainNav>
    <slot />
    <TheFooterNav v-if="!isMobile"></TheFooterNav>
  </div>
</template>