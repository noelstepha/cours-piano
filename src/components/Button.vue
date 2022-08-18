<template>
  <button
      class="bg-irish text-white p-2 px-4 uppercase border-2 hover:bg-transparent border-irish"
      :class="{ 'hover:text-irish border-irish': !dark, 'hover:text-white hover:border-white': dark }"
  >
    <span v-if="text">{{ text }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    dark: Boolean
  }
}
</script>

<style scoped>

</style>
