<script setup>
import Navbar from '../components/NavBar.vue'
import Room from '../components/Room.vue'
import Footer from '../components/Footer.vue'

import { links, hotelName, room } from '../constants.ts'

</script>

<template>
    <Navbar :links="links" :hotelName="hotelName"/>
    <Room :room="room" />
    <Footer :hotelName="hotelName"/>
</template>