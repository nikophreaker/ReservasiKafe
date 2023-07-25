<template>
  <div>
    <NavbarsAuthNavbar/>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <!-- <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div> -->
        <NuxtPage/>
        <FootersFooterSmall absolute />
      </section>
    </main>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

import registerBg2 from "@/assets/img/register_bg_2.png";
// navigateTo("/auth/login")
// export default {
//   data() {
//     return {
//       registerBg2,
//     };
//   },
// };
</script>

