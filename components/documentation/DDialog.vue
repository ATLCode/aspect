<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="h1">Dialog</div>
    <div class="content">
      <div class="h2">Basic</div>
      <ACard>
        {{ dialogOpen }}
        <AButton @click="dialogOpen = !dialogOpen">Open Dialog</AButton>
        <ADialog v-model="dialogOpen"></ADialog
      ></ACard>
      <ACard
        ><div>&lt;AButton&gt;Open Dialog&lt;/AButton&gt;</div>
        <div>
          &lt;ADialog :open="dialogOpen"&gt;Content Here!&lt;/ADialog&gt;
        </div>
      </ACard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ACard from "../a-components/ACard.vue";
import AButton from "../a-components/AButton.vue";
import ADialog from "../a-components/ADialog.vue";

const dialogOpen = ref(false);
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
