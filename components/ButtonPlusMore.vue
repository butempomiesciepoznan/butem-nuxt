<script setup>
let isShorter = ref(true);

const emit = defineEmits(["increase-text", "decrease-text"]);
const toggleText = () => {
  isShorter.value = !isShorter.value;
  emitEvents();
};

const emitEvents = () => {
  isShorter.value ? emit("decrease-text") : emit("increase-text");
};
</script>

<template>
  <v-btn-toggle class="w-100 flex items-center justify-end">
    <v-btn
      v-show="isShorter"
      class="text-lowercase"
      variant="text"
      prepend-icon="mdi-plus"
      @click="toggleText"
    >
      więcej
    </v-btn>
    <v-btn
      v-show="!isShorter"
      class="text-lowercase"
      variant="text"
      prepend-icon="mdi-minus"
      @click="toggleText"
    >
      mniej
    </v-btn>
  </v-btn-toggle>
</template>

<style scoped>
.v-btn {
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--darken-grey);
  letter-spacing: var(--button-letter-spacing);
  line-height: var(--button-line-height);
}
</style>
