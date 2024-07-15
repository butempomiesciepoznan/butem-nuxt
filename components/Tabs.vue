<script setup>
const tab = ref("description"); //Initiate a tab with "description" as the default
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

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="description">
          <TabDescription :description="description" />
        </v-tabs-window-item>
        <v-tabs-window-item value="map"> Mapa </v-tabs-window-item>
        <v-tabs-window-item value="routes"> Trasy </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  margin: 20px auto;
}

.v-tabs {
  background-color: var(--light-grey-background);
}

.v-tab {
  font-size: 1rem;
  text-transform: capitalize;
  color: var(--darken-grey-disactive-btn);
  letter-spacing: var(--button-letter-spacing);
  line-height: var(--button-line-height);
}

.v-tab.v-tab.v-btn {
  min-width: 120px;
}

.v-tab-item--selected {
  color: var(--black-color);
  background-color: var(--darken-grey-active-btn);
}

.v-slide-group {
  border-bottom: solid 1px var(--darken-grey);
}
</style>
