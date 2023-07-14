<script setup>
const route = useRoute()
console.log('current name', route.fullPath)
  function indexDirectory() {
    // const indexDir = index
    
    const route = useRoute()
    console.log('current name', route.fullPath)
  }
</script>

<template>
  <nav class="color-white p-4 flex flex-items-start flex-justify-between m-12">
    <img class="h-24 w-25" src="/assets/logo2.png" alt="Logo" />
      <ul class="navbar__menu list-none flex flex-items-start p-0 m-6 ml-auto">
        <li :class="{ 'navbar__menu__item--active': activeTab === 'home' }">
          <a href="#" @click="changeTab('home')">Home</a>
        </li>
        <li :class="{ 'navbar__menu__item--active': activeTab === 'about' }">
          <a href="#" @click="changeTab('about')">About</a>
        </li>
        <li :class="{ 'navbar__menu__item--active': activeTab === 'services' }">
          <a href="#" @click="changeTab('services')">Services</a>
        </li>
        <li :class="{ 'navbar__menu__item--active': activeTab === 'contact' }">
          <a href="#" @click="changeTab('contact')">Contact</a>
        </li>
      </ul>
      <button class="p-2 p-xy m-2 color-white bg-#29241F b-2 b-rd-1 b-white b-solid cursor-pointer hover-bg-white hover-color-#29241F" @click="$router.push('/login')">Get Started</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'home'
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
}
</script>

<style>
  .navbar__menu__item--active a {
    text-decoration: underline;
  }

  .navbar__menu li {
    margin-right: 4rem;
  }

  .navbar__menu li a {
    color: white;
    text-decoration: none;
  }
</style>
