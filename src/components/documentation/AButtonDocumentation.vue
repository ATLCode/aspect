<template>
  <div class="container">
    <div class="tabs"></div>
    <div class="intro">
      <div class="h1">Button</div>
    </div>
    <div class="content">
      <div class="section">
        <div class="h2">Basic</div>
        <ACard><AButton>Click Me</AButton></ACard>
        <ACard> &lt;AButton&gt;Click Me&lt;/AButton&gt; </ACard>
      </div>
      <div class="section">
        <div class="h2">Prepend & Append</div>
        <ACard>
          <AButton>
            <template #prepend>Prepended</template>Click Me
            <template #append>Appended</template></AButton
          ></ACard
        >

        <ACard>
          <div>&lt;AButton&gt;</div>
          <div>
            &emsp;&lt;template #prepend&gt;Prepended&lt;/template&gt;
            <span class="instruction"></span>
          </div>
          <div>&emsp;&emsp;Click Me <span class="instruction"></span></div>
          <div>
            &emsp;&lt;template #append&gt;Appended&lt;/template&gt;
            <span class="instruction"></span>
          </div>
          <div>&lt;/AButton&gt;</div>
        </ACard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from '../a-components/AButton.vue'
import ACard from '../a-components/ACard.vue'
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
.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
