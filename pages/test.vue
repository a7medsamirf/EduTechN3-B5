<template>
  <div>
    <h1 class="title">Nuxt Anime</h1>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();
onMounted(() => {
  $anime({
    targets: ".title",
    translateY: 50,
    loop: true,
    duration: 1200,
  });
});
</script>
