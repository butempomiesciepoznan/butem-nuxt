<script setup>
let { isMobile } = useDeviceType()
  
</script>

<template>
  <div v-cloak class="md:tw-mt-16 tw-mt-0 tw-mx-4 md:tw-mx-0">
    <template v-cloak v-if="isMobile">
      <slot />
    </template>

    <template v-else-if="isMobile === null"></template>

    <template v-cloak v-else>
      <TheMainNav />
        <slot />
      <TheFooterNav />
    </template>
  </div>
</template>