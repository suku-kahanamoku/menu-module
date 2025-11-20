<script setup lang="ts">
const localePath = useLocalePath();

const menuItems = [
  {
    label: "$.navbar.about",
    to: "/#about",
  },
  {
    label: "$.navbar.contact",
    to: "/#contact",
  },
];
const isOpen = ref(true);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main>
      <slot></slot>
    </main>
  </div>
</template>
