<script setup>
let isShorter = ref(true)

const toggleText = () => isShorter.value = !isShorter.value
</script>

<template>
  <v-btn-toggle class="flex items-center justify-center">
    <v-btn v-show="isShorter" class="text-lowercase" variant="text" prepend-icon="mdi-plus" @click="toggleText">
      więcej
    </v-btn>
    <v-btn v-show="!isShorter" class="text-lowercase" variant="text" prepend-icon="mdi-minus" @click="toggleText">
      mniej
    </v-btn>
  </v-btn-toggle>
</template>

<style scoped>
.v-btn {
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--darken-grey);
  letter-spacing: 0.1px;
  line-height: 20px;
}
</style>