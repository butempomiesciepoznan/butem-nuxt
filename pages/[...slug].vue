<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const slug = ref('')
if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1
  if (!route.params.slug[lastIndex]) {
    slug.value = route.params.slug[lastIndex - 1]
  } else {
    slug.value = route.params.slug[lastIndex]
  }
} else {
  slug.value = 'strona-glowna'
}

const { data: pages, refresh } = await useFetch(`${config.public.wordpressUrl}/pages`,
  {
    query: { slug: slug.value }
  }
)

</script>
<template>
  <div v-for="page in pages" :key="page.slug" class="md:tw-container md:tw-mx-auto xl:tw-max-w-[1312px] tw-px-16 tw-mt-40">
    <Header :title="page.title.rendered" :content="page.content.rendered" />
  </div>
</template>