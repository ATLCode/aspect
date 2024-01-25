<template>
  <RouterView class="rw" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
.rw {
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
}
</style>
