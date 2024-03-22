<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="h1">Checkbox</div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard>
        <div>Some text</div>
        <ADivider></ADivider>
        <div>Some more text</div>
      </ACard>
      <ACard>
        <div>&lt;div&gt;Some text&lt;/div&gt;</div>
        <div>&lt;ADivider&gt;&lt;/ADivider&gt;</div>
        <div>&lt;div&gt;Some more text&lt;/div&gt;</div>
      </ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from "../a-components/ACard.vue";
import ADivider from "../a-components/ADivider.vue";
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
