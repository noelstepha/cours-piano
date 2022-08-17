<template>
  <button class="bg-irish text-white p-2 px-4 uppercase">
    <span v-if="text">{{ text }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>
