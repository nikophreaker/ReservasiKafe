<script setup lang="ts">
    useSeoMeta({
      title: 'Admin CoffeShop'
    })
    definePageMeta({
        middleware: 'auth'
    })
    navigateTo("/admin/dashboard")
</script>

<template>
    <div>
    <Sidebar />
      <div class="relative md:ml-64 bg-blueGray-100 flex flex-col h-screen justify-between">
        <NavbarsAdminNavbar />
        <HeadersHeaderStats />
        <div class="px-4 md:px-10 mx-auto bg-blueGray-100 w-full -m-24">
          <NuxtPage />
          <FootersFooterAdmin />
        </div>
      </div>
    </div>
</template>
