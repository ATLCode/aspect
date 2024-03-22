<template>
  <div class="components-container">
    <DButton v-show="props.selectedPage === 'button'" />
    <DCard v-show="props.selectedPage === 'card'" />
    <DCheckbox v-show="props.selectedPage === 'checkbox'" />
    <DDialog v-show="props.selectedPage === 'dialog'" />
    <DDivider v-show="props.selectedPage === 'divider'" />
    <DField v-show="props.selectedPage === 'field'" />
    <DNotification v-show="props.selectedPage === 'notification'" />
    <DProgressCircular v-show="props.selectedPage === 'progress circular'" />
    <DProgressLinear v-show="props.selectedPage === 'progress linear'" />
    <DSelect v-show="props.selectedPage === 'select'" />
    <DSlider v-show="props.selectedPage === 'slider'" />
    <DSpacer v-show="props.selectedPage === 'spacer'" />
    <DTabs v-show="props.selectedPage === 'tabs'" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["selectedPage"]);
</script>

<style scoped lang="scss">
.components-container {
  padding: 1rem;
}
</style>
