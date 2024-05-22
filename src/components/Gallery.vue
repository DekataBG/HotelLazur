<script setup>
import { ref } from 'vue';

const pictures = ref([
  '/gallery/gallery-pic1.jpg',
  '/gallery/gallery-pic2.jpg',
  '/gallery/gallery-pic3.jpg',
  '/gallery/gallery-pic4.jpg',
  '/gallery/gallery-pic5.jpg',
  '/gallery/gallery-pic6.jpg',
  '/gallery/gallery-pic7.jpg',
  '/gallery/gallery-pic8.jpg',
  '/gallery/gallery-pic9.jpg',
]);
</script>

<template>
    <div class="board">
        <div class="box mr-3">            
            <img v-for="(picture, index) in pictures" :key="index" :src="picture" alt="Grid Image">
        </div>
    </div>
</template>

<style scoped>
img { 
    width: 400px;
    height: 400px;
    margin-left: 50px;
    margin-bottom: 50px;
    border-style: solid;    
    border-width: 1px;
}

.box {
    background-color: aliceblue;
}
</style>