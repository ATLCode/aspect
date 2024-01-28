<template>
  <div class="acd-container">
    <div class="tabs"></div>
    <div class="intro">
      <div class="h1">Card</div>
    </div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard>Content Here</ACard>
      <ACard> &lt;ACard&gt;Content Here&lt;/ACard&gt; </ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from '../a-components/ACard.vue'
</script>

<style lang="scss" scoped>
.acd-container {
  height: 100%;
  width: 100%;
  font-family: 'Inter var', sans-serif;
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
