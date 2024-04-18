<script setup>
import { defineProps, ref, onMounted, computed } from 'vue';
import { addDays, subDays } from 'date-fns';
import ServicesIcons from '../components/ServicesIcons.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
  room: {
    type: Object,
    required: true,
  },
});

const date = ref();
const disabledDates = [subDays(new Date(), 1), new Date(), addDays(new Date(), 1)];
</script>

<template>
  <h1 class="title text-center mt-3">{{ room.title }}</h1>
  <div class="text-center mb-5">
    <img
      :src="`/rooms/${fileName}`"
      :alt="room.title"
      class="room-img"
    />
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <p class="text-center description">{{room.features}}</p>
      <div class="divider mt-4 mb-4"></div>
    </div>
  </div>
  <div class="text-center fw-bold mb-3">
      <h5 class="mb-4">Характеристики</h5>
      <div style="--font-size: 30px; --margin-size: 10px;">
        <ServicesIcons />
      </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <div class="divider mt-4 mb-4"></div>
    </div>
  </div>
  <div class="text-center fw-bold">
    <h3 class="primary-text">РЕЗЕРВИРАЙ СЕГА</h3>
  </div>
  <div class="booking row justify-content-center mb-3 p-4">
    <div class="col-3">
        <VueDatePicker 
            v-model="date"
            placeholder="Избери дати"
            :range="{ noDisabledRange: true }"
            :disabled-dates="disabledDates"
            locale="bg"
            format="P"
        />
    </div>
    <div class="col-1">
        <button class="booking-button">РЕЗЕРВИРАЙ</button>
    </div>
  </div>
</template>

<style scoped>
.title, .description {
  color: #033f59;
}

.room-img {
  width: 110vh;
  height: 65vh;
  border-radius: 5%;
  border-width: 2px;
  border-style: solid;
}

.divider {
    border-top: 0.5px solid black;
}

p {
    font-size: 17px;
}

.booking {
    background-color: #eee;
}

.booking-button {
	background: #cb5951;
	border-radius:30px;
	color: #fff;
	padding: 10px;
}

.booking-button:hover {
	color: #fff;
	background: #4B7B92;
}
</style>
