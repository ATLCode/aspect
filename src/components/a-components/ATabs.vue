<template>
  <div class="tab-header"></div>
  <div class="tab-content"><slot></slot> {{ slots2 }}</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, useSlots } from 'vue'

// https://github.com/primefaces/primevue/blob/master/components/lib/tabview/TabView.vue

const slots2 = useSlots()

const tabs2 = computed(() => {
  return slots2
})

/*

const slots = ref()

onMounted(() => {
  slots.value = useSlots()
})


const tabs = computed(() => {
  if (!slots.value) {
    return []
  }
  return slots.value.default().reduce((tabs: any, child: any) => {
    tabs.push(child)
    return tabs
  }, [])
})



  tabs() {
            return this.$slots.default().reduce((tabs, child) => {
                if (this.isTabPanel(child)) {
                    tabs.push(child);
                } else if (child.children && child.children instanceof Array) {
                    child.children.forEach((nestedChild) => {
                        if (this.isTabPanel(nestedChild)) {
                            tabs.push(nestedChild);
                        }
                    });
                }

                return tabs;
            }, []);
        },
*/
</script>
<style lang="scss" scoped></style>
