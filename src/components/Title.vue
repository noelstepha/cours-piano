<template>
  <h1 class="text-3xl uppercase">{{ text }}</h1>
  <div class="border-b border-b-blue-400 w-20 my-2.5"></div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String
  }
}
</script>
