<script setup>
const route = useRouter();
useSeoMeta({
  title: "Reservasi",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="route.path" />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #29241f;
}
</style>
