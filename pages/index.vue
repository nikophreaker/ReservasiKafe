<script setup lang="ts">
const { data, error, pending } = await useAPIFetch("/menus", { 
  method: "GET",
  onRequest({ request, options }) {
    // Set the request headers
    options.headers = options.headers || {}
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
  },
  onResponse({ request, response, options }) {
    // Process the response data
    // localStorage.setItem('token', response._data.token)
    console.log(response._data);
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
  }
})
</script>
<template>
<div class="relative">
    <img class="absolute -z-10 right-0" src="/assets/kopi-bijik.png" >
    <AppBar />
    <div class="container mx-auto grid grid-cols-4 gap-8">
      <div class="bg-white" v-for="{item_name, photo, description, price} in data" >
          <img :src="photo" :alt="item_name" :width="150"   :height="150"/>
          <h4>{{ item_name }}</h4>
          <h6>{{ description }}</h6>
          <p>{{ price }}</p>
      </div>
    </div>

</div>
</template>