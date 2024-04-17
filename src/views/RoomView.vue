<script setup>
import Navbar from '../components/NavBar.vue'
import Room from '../components/Room.vue'
import Footer from '../components/Footer.vue'

import { links, hotelName, rooms } from '@/constants.ts'

defineProps({
    roomId: Number
})


</script>

<template>
    <Navbar :links="links"/>
    <Room :room="rooms[roomId - 1]" />
    <Footer :hotelName="hotelName"/>
</template>