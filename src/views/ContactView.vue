<script setup>
import Navbar from '../components/NavBar.vue'
import ContactForm from '../components/ContactForm.vue'
import ContactInfo from '../components/ContactInfo.vue'
import Footer from '../components/Footer.vue'

import { ref } from 'vue'

const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Contact us", path: "/contact", isOpen: false },
])

const hotelName = 'Hotel Lazur'
</script>

<template>
    <Navbar :links="links" :hotelName="hotelName"/>
    <ContactForm/>
    <ContactInfo/>
    <Footer :hotelName="hotelName"/>
</template>