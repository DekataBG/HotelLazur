<script lang='ts' setup>
import { defineProps, ref, onMounted, computed, defineComponent } from 'vue';
import { addDays, subDays } from 'date-fns';
import ServicesIcons from '../components/ServicesIcons.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { addReservation, fetchReservationsForType, fetchRoomsFromType } from '@/plugins/api';
import { useToast } from 'vue-toast-notification';
import { AxiosError } from 'axios';
import type { DatePickerInstance } from "@vuepic/vue-datepicker"

const props = defineProps({
  room: {
    type: Object,
    required: true,
  },
});


const parts = props.room.imagePath.split('/')
const fileName = parts[parts.length - 1]
const date = ref();
const datepicker = ref<DatePickerInstance>(null);
const roomTypeReservations = await fetchReservationsForType(props.room.id);
const $toast = useToast();


const disabledDates = roomTypeReservations.map( (x) => {
  let dates = []
  const [year, month, day] = x.startDate.split('-').map(Number);
  let xDate = new Date(year, month - 1, day)
  while (x.days > 0){
    dates.push(xDate); // YYYY-MM-DD
    x.days--;
    xDate = subDays(xDate, 1)
  }
  return dates
}).flat();


const emailText = ref('')
const nameText = ref('')
const phoneText = ref('')


// TODO: Send personal information of user (email, phone, name)
async function sendReservation () {
  if(date.value && date.value[0] && date.value[1]){


    // Change format into YYYY-MM-DD
    const dateStart = `${date.value[0].getFullYear()}-${('0' + (date.value[0].getMonth() + 1)).slice(-2)}-${('0' + date.value[0].getDate()).slice(-2)}`;

    const days = Math.floor((date.value[1].getTime() - date.value[0].getTime()) / (1000 * 60 * 60 * 24)) + 1

    const result = await addReservation(props.room.id, dateStart, days, emailText.value, nameText.value, phoneText.value)

    if(result instanceof AxiosError){
      console.error(result)
      $toast.open({
        message: 'Error! ' + result.response!.status + ' ' + result.response!.statusText,
        type: 'error',
        position: 'top'
      });
    }
    else{
      $toast.open({
        message: 'Направена резервация',
        type: 'success',
        position: 'top'
      });
      datepicker.value!.clearValue();
    }
  }
  else{
    $toast.open({
      message: 'Изберете дати за престой.',
      type: 'error',
      position: 'top'
    });
  }
}

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
            ref="datepicker"
        />
    </div>
    <div class="col-1">
        <button class="booking-button" data-bs-toggle="modal" data-bs-target="#SubmitPersonalInfoModal">РЕЗЕРВИРАЙ</button>
    </div>
  </div>
  <div class="modal fade" id="SubmitPersonalInfoModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Лична информация</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <!-- <div class="form-group">
              <label for="name">Име</label>
              <input v-model="nameText" type="text" name="Name" id="Name">
            </div>
            <div class="form-group">
                  <label for="email">Имейл</label>
                  <input v-model="emailText" type="email" name="email" id="email">
            </div>
            <div class="form-group">
                  <label for="message">Съобщение</label>
                  <textarea v-model="messageText" type="email" name="message" id="message"></textarea>
            </div> -->
            <div class="mb-3">
              <label for="name" class="form-label">Име</label>
              <input v-model="nameText" type="text" name="Name" id="Name" class="form-control">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Имейл</label>
              <input v-model="emailText" type="email" name="email" id="email" class="form-control">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Телефонен номер</label>
              <input v-model="phoneText" type="text" name="phone" id="phone" class="form-control">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="sendReservation()">Save changes</button>
        </div>
      </div>
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
