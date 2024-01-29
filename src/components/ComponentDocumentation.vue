<template>
  <div class="cd-container">
    <AButtonDocumentation v-show="props.selectedPage === 'button'" />
    <ACardDocumentation v-show="props.selectedPage === 'card'" />
    <ACheckboxDocumentation v-show="props.selectedPage === 'checkbox'" />
    <ADialogDocumentation v-show="props.selectedPage === 'dialog'" />
    <ADividerDocumentation v-show="props.selectedPage === 'divider'" />
    <AFieldDocumentation v-show="props.selectedPage === 'field'" />
    <ANotificationDocumentation v-show="props.selectedPage === 'notification'" />
    <AProgressCircularDocumentation v-show="props.selectedPage === 'progress circular'" />
    <AProgressLinearDocumentation v-show="props.selectedPage === 'progress linear'" />
    <ASelectDocumentation v-show="props.selectedPage === 'select'" />
    <ASpacerDocumentation v-show="props.selectedPage === 'spacer'" />
    <ATabsDocumentation v-show="props.selectedPage === 'tabs'" />
    <ASliderDocumentation v-show="props.selectedPage === 'slider'" />
  </div>
</template>

<script setup lang="ts">
import AButtonDocumentation from './documentation/AButtonDocumentation.vue'
import ACardDocumentation from './documentation/ACardDocumentation.vue'
import ACheckboxDocumentation from './documentation/ACheckboxDocumentation.vue'
import ADialogDocumentation from './documentation/ADialogDocumentation.vue'
import ADividerDocumentation from './documentation/ADividerDocumentation.vue'
import AFieldDocumentation from './documentation/AFieldDocumentation.vue'
import ANotificationDocumentation from './documentation/ANotificationDocumentation.vue'
import AProgressCircularDocumentation from './documentation/AProgressCircularDocumentation.vue'
import AProgressLinearDocumentation from './documentation/AProgressLinearDocumentation.vue'
import ASelectDocumentation from './documentation/ASelectDocumentation.vue'
import ASpacerDocumentation from './documentation/ASpacerDocumentation.vue'
import ATabsDocumentation from './documentation/ATabsDocumentation.vue'
import ASliderDocumentation from './documentation/ASliderDocumentation.vue'

const props = defineProps(['selectedPage'])
</script>

<style scoped lang="scss">
.cd-container {
  padding: 1rem;
}
</style>
