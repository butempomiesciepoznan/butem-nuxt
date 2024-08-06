<script setup>
// Tab initialisation
const tab = ref(null);

// Description (can be changed to data from the backend)
const description = ref("");
description.value =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const textContainer = ref(null);
const initialTextHeight = 120;

let { isExpanded, textHeight, toggleTextLength } = useTextHeightToggle(initialTextHeight, textContainer);

const tabRoutesData = ref([
  {
    src: '/img/foto1.svg',
    alt: 'foto 1',
    header: 'Ratusz w Poznaniu',
    href: 'https://pl.wikipedia.org/wiki/Ratusz_w_Poznaniu'
  },
  {
    src: '/img/foto2.svg',
    alt: 'foto 2',
    header: 'Domki budnicze',
    href: 'https://pl.wikipedia.org/wiki/Domki_budnicze_w_Poznaniu'
  },
  {
    src: '/img/foto3.svg',
    alt: 'foto 3',
    header: 'Katedra Poznańska',
    href: 'https://pl.wikipedia.org/wiki/Bazylika_archikatedralna_%C5%9Awi%C4%99tych_Aposto%C5%82%C3%B3w_Piotra_i_Paw%C5%82a_w_Poznaniu'
  }
]);

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
          :class="isExpanded ? '' : 'ellipsis'"
        >
          <TabDescription :description="description" />
        </div>
        <ButtonPlusMore
          @increase-text="toggleTextLength"
          @decrease-text="toggleTextLength"
        />
      </v-tabs-window-item>
      
      <v-tabs-window-item value="map">Mapa</v-tabs-window-item>

      <v-tabs-window-item value="routes">
        <TabRoutes :tabRoutes="tabRoutesData" />
      </v-tabs-window-item>

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

.ellipsis {
  -webkit-line-clamp: 5; /* number of visible lines */
  line-clamp: 5;
}
</style>
