<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="intro">
      <div class="h1">Slider</div>
    </div>
    <div class="content">
      <div class="section">
        <div class="h2">Basic</div>
        <ACard><ASlider v-model="sliderValue" /> {{ sliderValue }}</ACard>
        <ACard> &lt;AButton&gt;Click Me&lt;/AButton&gt; </ACard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ACard from "../a-components/ACard.vue";
import ASlider from "../a-components/ASlider.vue";

const sliderValue = ref(0);
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

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
