<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardsCardLineChart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardsCardBarChart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardsCardPageVisits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardsCardSocialTraffic />
      </div>
    </div>
  </div>
</template>

<!-- <script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
    CardBarChart,
    CardPageVisits,
    CardSocialTraffic,
},
};
</script> -->
