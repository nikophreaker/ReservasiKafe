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
  <nav class="text-white flex m-12">
    <img class="h-24 w-25" src="/assets/logo2.png" alt="Logo" />
      <ul class="navbar__menu flex m-6 ml-auto">
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
      <div class="m-4">
        <button class="p-2 m-auto text-white bg-primary-26 border-2 rounded-2xl border-white border-solid cursor-pointer hover:bg-white hover:text-primary-25" @click="$router.push('/auth')">Get Started</button>
      </div>
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
