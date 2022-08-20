<template>
  <div class="w-full px-10 flex colored" :class="{'justify-center': center}" :style="'filter: hue-rotate('+colorRotation+'deg)'">
<!--    <div class="border-b border-b-blue-400 w-20 mb-10 mx-5"></div>-->
    <img class="w-80" src="/img/free-lesson3.png"/>
    <div class="w-full border-b border-b-blue-400 mb-10 mx-5"></div>
  </div>
</template>

<script>
export default {
  name: "FreeLesson",
  props: {
    center: Boolean,
    colorRotation: Number
  }
}
</script>

<style scoped>
.colored {
  filter: hue-rotate(150deg);
}
</style>
