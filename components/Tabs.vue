<script setup>
const tab = ref("null"); //Initiate a tab with "description" as the default
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore encididunt consequat. Ation ullamco laboris nisi ut aliquip ex ea commodo consequat.... "; //TO DO exchanged with data from the backend
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
        <TabDescription :description="description" />
        <div class="button-section">
          <ButtonPlusMore />
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="map"> Mapa </v-tabs-window-item>
      <v-tabs-window-item value="routes"> Trasy </v-tabs-window-item>
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
