<template>
  <section
      class="flex items-center mb-12 bg-fixed bg-cover bg-center w-full text-5xl italic text-white font-baskerville"
      :class="{ [bgClass]: true}"
  >
      <slot />
  </section>
</template>

<script>
export default {
  name: "CatchPhrase",
  props: {
    bgClass: String
  }
}
</script>

<style scoped>
.bg-gradient {
  background-image: url("/img/gradient.png");
}

.bg-sheet-music {
  background-image: url("/img/sheet-music.jpg");
}

.bg-children {
  background-image: url("/img/cours-enfant.jpg");
}

.bg-adult {
  background-image: url("/img/cours-adulte.jpg");
}

.bg-pricing {
  background-image: url("/img/sheet-flower.jpg");
}
</style>
