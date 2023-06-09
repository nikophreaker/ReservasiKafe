<script setup>
const route = useRouter()
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="route.path" />
  </NuxtLayout>
</template>
