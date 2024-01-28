<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="h1">Field</div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard><AField></AField></ACard>
      <ACard> &lt;AField&gt;&lt;/AField&gt; </ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from '../a-components/ACard.vue'
import AField from '../a-components/AField.vue'
</script>

<style lang="scss" scoped>
.container {
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
