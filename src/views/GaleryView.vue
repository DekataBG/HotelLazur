<script setup>
import Navbar from '../components/NavBar.vue'
import Gallery from '../components/Gallery.vue'
import Footer from '../components/Footer.vue'

import { links, hotelName } from '@/constants.ts'
</script>

<template>
    <Navbar :links="links"/>
    <Gallery/>
    <Footer :hotelName="hotelName"/>
</template>