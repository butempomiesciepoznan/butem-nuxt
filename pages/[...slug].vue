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

const { data: pages, pending, error, refresh } = await useFetch(`${config.public.wordpressUrl}/pages`,
  {
    query: { slug: slug.value }
  }
)

const toggleTextLength = (height) => {
  return document.querySelector('[data-text-length]').style.height = height + 'px'
}

</script>
<template>
  <UContainer>
    <div v-for="page in pages" :key="page.slug">
      <Header :title="page.title.rendered" :content="page.content.rendered" />

      <div style="width:300px; height:300px;background-color: aqua; transition: 0.4s height" data-text-length>tekst</div>
      <ButtonPlusMore @increase-text="toggleTextLength(400)" @decrease-text="toggleTextLength(300)" />
      
    </div>
  </UContainer>
</template>