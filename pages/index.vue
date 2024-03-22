<template>
  <div class="index-container">
    <div class="header"><MainHeader /> {{ selectedPage }}</div>
    <div class="nav">
      <MainNav
        :components="components"
        :selectedPage="selectedPage"
        @selectPage="selectPage"
      />
    </div>
    <div class="documentation">
      <DocumentationComponents :selectedPage="selectedPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const components = {
  containment: {
    name: "Containment",
    content: {
      button: "Button",
      card: "Card",
      divider: "Divider",
      spacer: "Spacer",
    },
  },
  data: { name: "Data", content: {} },
  feedback: { name: "Feedback", content: { notification: "Notification" } },
  form: {
    name: "Form",
    content: {
      checkbox: "Checkbox",
      field: "Field",
      select: "Select",
      slider: "Slider",
    },
  },
  menu: { name: "Menu", content: { tabs: "Tabs" } },
  media: { name: "Media", content: {} },
  misc: {
    name: "Misc",
    content: {
      progressCircular: "Progress Circular",
      progressLinear: "Progress Linear",
    },
  },
  overlay: { name: "Overlay", content: { dialog: "Dialog" } },
};

// Page Selection
const selectedPage = ref("button");
function selectPage(component: string) {
  selectedPage.value = component.toLowerCase();
}
</script>

<style scoped lang="scss">
.index-container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "headbar headbar"
    "navbar window";

  .header {
    display: flex;
    grid-area: headbar;
  }
  .nav {
    grid-area: navbar;
    overflow: auto;
  }
  .documentation {
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
