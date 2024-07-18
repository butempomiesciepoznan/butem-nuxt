<script setup>
// Tab initialisation
const tab = ref(null);

// Description (can be changed to data from the backend)
const description = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
);

// Ref to the div element with the text
const textContainer = ref(null);
const textHeight = ref(120); // Initial height
const isExpanded = ref(false);

// Function to set the text height
const setTextHeight = async () => {
  await nextTick(); // Wait for full DOM rendering
  if (textContainer.value) {
    textHeight.value = isExpanded.value
      ? textContainer.value.scrollHeight // Set to full height
      : 120; // Initial height
  }
};

const toggleTextLength = () => {
  isExpanded.value = !isExpanded.value;
  setTextHeight();
};
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center" show-arrows>
      <v-tab value="description">Opis</v-tab>
      <v-tab value="map">Mapa</v-tab>
      <v-tab value="routes">Trasy</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="description">
        <div
          ref="textContainer"
          :style="{
            height: textHeight + 'px',
            transition: 'height 0.4s',
            overflow: 'hidden',
          }"
          data-text-length
        >
          <TabDescription :description="description" />
        </div>
        <div class="button-section">
          <ButtonPlusMore
            @increase-text="toggleTextLength"
            @decrease-text="toggleTextLength"
          />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="map">Mapa</v-tabs-window-item>
      <v-tabs-window-item value="routes">Trasy</v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<style scoped>
.v-card {
  margin: 16px auto;
  box-shadow: none;
}

.v-tabs {
  background-color: var(--light-grey-background);
}

.v-tab {
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--darken-grey-disactive-btn);
  letter-spacing: var(--tab-title-letter-spacing);
  line-height: var(--tab-title-line-height);
}

.v-tab.v-tab.v-btn {
  min-width: 120px;
}

.v-tab-item--selected {
  color: var(--black-color);
  background-color: var(--darken-grey-active-btn);
}

.v-tabs-window-item {
  margin: 20px 0;
}

.button-section {
  display: flex;
  justify-content: flex-end;
}
</style>
