<script setup>
// Tab initialisation
const tab = ref(null);

const props = defineProps({
  placeUrl: {
    type: String,
    required: true
  }
});

const { placeUrl } = props;

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

const tabMapsData = ref([
  {
    placeUrl: 'domki-budnicze',
    street: 'Stary Rynek',
    zipCode: '61-772',
    city: 'Poznań',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9204758052383!2d16.93148301183113!3d52.40811747191544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b38f4dbaaa9%3A0x24a79a9fe2a3e993!2sDomki%20budnicze!5e0!3m2!1spl!2spl!4v1723035468474!5m2!1spl!2spl'
  },
  {
    placeUrl: 'katedra-poznanska',
    street: 'Ostrów Tumski 17',
    zipCode: '61-109',
    city: 'Poznań',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.7408250438693!2d16.945954311831397!3d52.41137327191619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b697acef619%3A0xc5f72858c17a722b!2sBazylika%20Archikatedralna%20%C5%9Bw.%20Aposto%C5%82%C3%B3w%20Piotra%20i%20Paw%C5%82a!5e0!3m2!1spl!2spl!4v1723036135008!5m2!1spl!2spl'
  },
  {
    placeUrl: 'ratusz-poznanski',
    street: 'Stary Rynek 25',
    zipCode: '61-772',
    city: 'Poznań',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.896814077305!2d16.929276552085444!3d52.4085463001395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045bb29ba4727d%3A0x6debfca6aaeccb8b!2sRatusz!5e0!3m2!1spl!2spl!4v1723036177382!5m2!1spl!2spl'
  }
])

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
      
      <v-tabs-window-item value="map">
        <TabMaps :tabMaps="tabMapsData" :placeUrl="placeUrl" />
      </v-tabs-window-item>

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
