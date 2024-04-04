<script setup>
import Navbar from '../components/NavBar.vue'
import ShowCase from '../components/ShowCase.vue'
import AboutHotel from '../components/AboutHotel.vue'
import Features from '../components/Features.vue'
import Footer from '../components/Footer.vue'

import { ref } from 'vue'

const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Contact us", path: "/contact-us", isOpen: false },
])
const features = [
  {id: 1, title: "Great Location", description: "The hotel is near the center of the city and all the major attractions"},
  {id: 2, title: "Tasty food", description: "The best chefs in the city cook for you"},
  {id: 3, title: "Gym", description: "The hotel has gym with the newest equipment"},
  {id: 4, title: "Pool", description: "The pool is 25 meters long and 10 meters wide"}
]

const hotelName = 'Hotel Lazur'
</script>

<template>
  <header>
    <Navbar :links="links" :hotelName="hotelName"/>
    <ShowCase />
    <AboutHotel />
    <Features :features="features" />
    <Footer :hotelName="hotelName"/>
  </header>
</template>
