<script setup>
import Navbar from '../components/NavBar.vue'
import Rooms from '../components/Rooms.vue'
import Footer from '../components/Footer.vue'

import { links, hotelName } from '../constants.js'
</script>

<template>
    <Navbar :links="links" :hotelName="hotelName"/>
    <Rooms />
    <Footer :hotelName="hotelName"/>
</template>