<template>
  <div class="container">
    <div class="header"><HeadBar /> {{ selectedPage }}</div>
    <div class="nav"><NavBar :components="components" :selectedPage="selectedPage" /></div>
    <div class="window"><ComponentDocumentation /></div>
  </div>
</template>

<script setup lang="ts">
import HeadBar from '@/components/HeadBar.vue'
import NavBar from '@/components/NavBar.vue'
import ComponentDocumentation from '@/components/ComponentDocumentation.vue'
import { ref } from 'vue'

const components = {
  containment: {
    name: 'Containment',
    content: {
      button: 'Button',
      card: 'Card',
      tooltip: 'Tooltip',
      divider: 'Divider',
      spacer: 'Spacer'
    }
  },
  data: { name: 'Data', content: {} },
  feedback: { name: 'Feedback', content: { notification: 'Notification' } },
  form: {
    name: 'Form',
    content: {
      checkbox: 'Checkbox',
      field: 'Field',
      select: 'Select',
      search: 'Search',
      slider: 'Slider',
      switch: 'Switch'
    }
  },
  menu: { name: 'Menu', content: { tabs: 'Tabs' } },
  media: { name: 'Media', content: {} },
  misc: { name: 'Misc', content: {} },
  overlay: { name: 'Overlay', content: { dialog: 'Dialog' } },
  text: { name: 'Text', content: { subtitle: 'Subtitle', title: 'Title' } }
}

const selectedPage = ref('button')
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'headbar headbar'
    'navbar window';

  .header {
    display: flex;
    grid-area: headbar;
  }
  .nav {
    grid-area: navbar;
    overflow: auto;
  }
  .window {
    grid-area: window;
  }
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--text);
  border-radius: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
