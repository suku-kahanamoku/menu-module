<script setup lang="ts">
const {
  i18n: { locale },
} = useLang();
</script>
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CmpCookieBanner />
  </UApp>
</template>
