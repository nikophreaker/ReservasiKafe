<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-0 px-4">
      <CardsCardTable
        :title="title"
        :item="data.data"
      />
    </div>
    <div class="mb-12 text-center w-full">
      <a
        class="m-2"
        v-for="{url, label, active} in data.links"
        :key="label"
        href="#"
        :hidden="url==null"
        :class="{'text-green-500' : active}"
        @click="select(label)"
      >{{ label }}</a>
    </div>
    <div class="w-full mb-12 px-4">
      <CardsCardTable color="dark" />
    </div>
  </div>
</template>
<script setup>
// import CardTable from "@/components/Cards/CardTable.vue";

// export default {
//   components: {
//     CardTable,
//   },
// };

const title = "Data Menu";
const page = ref(1);
const { data, error, pending } = await useAPIFetch(
  `/menus?page=${page.value}`,
  {
    method: "GET",
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = options.headers || {};
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      console.log(response._data);
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  }
);

function next() {
  page.value++;
}
function prev() {
  page.value--;
}
function select(value) {
  page.value == value;
}
</script>
