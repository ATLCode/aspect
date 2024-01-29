<template>
  <slot></slot>
</template>
<script lang="ts" setup>
const props = defineProps({
  header: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped></style>
