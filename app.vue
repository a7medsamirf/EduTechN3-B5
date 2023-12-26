<script setup>
useSeoMeta({
  title: "Meet Nuxt",
  description: "The Intuitive Vue Framework.",
});
</script>
<template>
  <div id="app">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style></style>
