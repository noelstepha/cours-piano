<template>
  <div class="flex flex-col justify-center bg-animated-gradient">
    <div class="bg-overwhite p-4">
      <div class="bg-corners">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedGradient"
}
</script>

<style scoped>
.bg-animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e7cb3c, #23a6d5, #23d576);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.bg-corners{
  background: linear-gradient(to right, white 2px, transparent 2px) 0 0,
  linear-gradient(to right, white 2px, transparent 2px) 0 100%,
  linear-gradient(to left, white 2px, transparent 2px) 100% 0,
  linear-gradient(to left, white 2px, transparent 2px) 100% 100%,
  linear-gradient(to bottom, white 2px, transparent 2px) 0 0,
  linear-gradient(to bottom, white 2px, transparent 2px) 100% 0,
  linear-gradient(to top, white 2px, transparent 2px) 0 100%,
  linear-gradient(to top, white 2px, transparent 2px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 40px 40px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
