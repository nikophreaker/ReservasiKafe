<script setup>
const route = useRouter()
useSeoMeta({
  title: 'CoffeShop'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="route.path" />
  </NuxtLayout>
</template>

<style>
  body {
    background-color: #29241F;
  }
</style>
