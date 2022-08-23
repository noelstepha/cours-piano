<template>
  <div
      class="mx-5 md:mx-10 2xl:mx-auto max-w-screen-xl flex items-stretch"
      :class="{ 'flex-col-reverse md:flex-row': reverse, 'flex-wrap' : !reverse }"
  >
    <div
        class="w-full md:w-1/2 h-80 md:h-auto bg-center bg-cover"
        v-if="!reverse"
        :class="{ [bgClass]: true }"
    ></div>
    <div class="w-full md:w-1/2 py-5 pr-5 flex flex-col"
    :class="{ 'pt-10': !first, 'pb-10': !last, 'md:pl-10': !reverse} ">
      <Title :text="title"></Title>
      <p class="flex-grow">
        <slot />
      </p>
      <Button class="w-max mt-2">
        <router-link :to="to">Lire plus</router-link>
      </Button>
    </div>
    <div
        class="w-full md:w-1/2 h-80 md:h-auto bg-center bg-cover"
        v-if="reverse"
        :class="{ [bgClass]: true }"
    ></div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";
export default {
  name: "PagePreview",
  components: {Title, Button},
  props: {
    reverse: Boolean,
    title: String,
    to: String,
    bgClass: String,
    first: Boolean,
    last: Boolean
  }
}
</script>

<style scoped>
.children-img {
  background-image: url('/img/cours-enfant.jpg');
}

.adult-img {
  background-image: url('/img/cours-adulte.jpg');
}

.online-img {
  background-image: url('/img/online.jpg');
}
</style>
