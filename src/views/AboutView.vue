<script setup>
import Navbar from '../components/NavBar.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'
import Guests from '../components/Guests.vue'

import { ref } from 'vue'

const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Contact us", path: "/contact-us", isOpen: false },
])

const hotelName = 'Hotel Lazur'

</script>

<template>
    <Navbar :links="links" :hotelName="hotelName"/>
    <About/>
    <Guests />
    <Footer :hotelName="hotelName"/>
</template>