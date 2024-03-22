<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="h1">Progress Cicular</div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard>Coming Soon...</ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from "../a-components/ACard.vue";
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  font-family: "Inter var", sans-serif;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}
</style>
