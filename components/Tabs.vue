<script setup>
const tab = ref("one");
</script>

<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="description">Opis</v-tab>
      <v-tab value="map">Mapa</v-tab>
      <v-tab value="routes">Trasy</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="description">
          <TabDescription description="opis testowy" />
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
  color: var(--darken-grey);
  letter-spacing: var(--button-letter-spacing);
  line-height: var(--button-line-height);
}

.v-tab.v-tab.v-btn {
  min-width: 120px;
}

.v-slide-group {
  border-bottom: solid 1px var(--darken-grey);
}
</style>
