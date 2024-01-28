<template>
  <div class="nav-container">
    <AButton variant="plain" class="h2">
      <template #prepend><img src="../assets/icons/home.svg" class="icon" /></template>
      Getting Started</AButton
    >
    <AButton variant="plain" @click="showComponents = !showComponents" class="h2">
      <template #prepend><img src="../assets/icons/box.svg" class="icon" /></template>
      Components</AButton
    >
    <div v-if="showComponents">
      <ol>
        <li v-for="category in props.components" :key="category.name">
          <span class="nav-category h3">{{ category.name }}</span>
          <div>
            <ol>
              <li v-for="component in category.content" :key="component">
                <div class="nav-component h4" @click="$emit('selectPage', component)">
                  {{ component }}
                </div>
              </li>
            </ol>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AButton from './a-components/AButton.vue'

const props = defineProps(['components', 'selectedPage'])

const showComponents = ref(false)
</script>

<style scoped lang="scss">
.nav-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  ol {
    display: flex;
    flex-direction: column;
    padding-left: 10%;
  }
  li {
    list-style: none;
  }

  .nav-category {
    display: flex;
    padding: 0.5rem;
  }
  .nav-component {
    display: flex;
    border-left: 1px solid var(--border);
    padding: 0.5rem;
    text-decoration: none;
    color: var(--text);
    cursor: pointer;
    &:hover {
      border-left-color: var(--primary);
      color: var(--primary);
    }
  }
}
</style>
