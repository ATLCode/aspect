<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="h1">Checkbox</div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard><ACheckbox></ACheckbox></ACard>
      <ACard> &lt;ACheckbox&gt;&lt;/ACheckbox&gt; </ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ACard from "../a-components/ACard.vue";
import ACheckbox from "../a-components/ACheckbox.vue";
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
