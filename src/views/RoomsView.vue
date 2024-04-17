<script setup>
import Navbar from '../components/NavBar.vue'
import Rooms from '../components/Rooms.vue'
import Footer from '../components/Footer.vue'

import { links, hotelName, rooms } from '@/constants.ts'
</script>

<template>
    <Navbar :links="links"/>
    <Rooms :rooms="rooms" />
    <Footer :hotelName="hotelName"/>
</template>