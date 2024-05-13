<script setup lang="ts">
import { mapGetters, mapMutations } from '../vuex-helper.js'
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { addReservation } from '@/plugins/api';
import { AxiosError } from 'axios';

const $toast = useToast();

const { getCartItems, getCartItemsCount } = mapGetters()
const { clearCartItems, removeItem } = mapMutations()

const nameText = ref('')
const emailText = ref('')
const phoneText = ref('')

async function sendReservation () {
  if(nameText.value === null || nameText.value === undefined || nameText.value.trim() === '') {
    $toast.open({
      message: 'Въведете име',
      type: 'error',
      position: 'top'
    });
    return
  }

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(emailText.value)) {
    $toast.open({
      message: 'Невалиден имейл',
      type: 'error',
      position: 'top'
    });
    return
  }

  const phoneRegex: RegExp = /^(\+)?\d+$/;
    if(!phoneRegex.test(phoneText.value)) {
    $toast.open({
      message: 'Невалиден телефонен номер',
      type: 'error',
      position: 'top'
    });
    return
  }

  for(const room of getCartItems.value) {
    if(room.date.value && room.date.value[0] && room.date.value[1]){
        // Change format into YYYY-MM-DD
        const dateStart = `${room.date.value[0].getFullYear()}-${('0' + (room.date.value[0].getMonth() + 1)).slice(-2)}-${('0' + room.date.value[0].getDate()).slice(-2)}`;

        const days = Math.floor((room.date.value[1].getTime() - room.date.value[0].getTime()) / (1000 * 60 * 60 * 24)) + 1

        const result = await addReservation(room.id, dateStart, days, emailText.value, nameText.value, phoneText.value)

        if(result instanceof AxiosError){
            console.error(result)
            $toast.open({
                message: 'Error! ' + result.response!.status + ' ' + result.response!.statusText,
                type: 'error',
                position: 'top'
            });
            return;
        }
    }
  }
    $toast.open({
        message: 'Направена е резервация',
        type: 'success',
        position: 'top'
    });
    clearCartItems();
}

</script>

<template>
    <section v-if="getCartItemsCount > 0" id="about-info" class="py-3">
        <div class="container mb-3" v-for="item in getCartItems">
            <div class="info-left">
                <h1 class="l-heading"> {{ item.title }} </h1>
                <p>{{ item.price }} лв.</p>
            </div>
            <div class="info-right">
                <img :src="`/rooms/${item.imagePath}`" :alt="СнимкаНаСтаята">
                <div class="close">
                    <i class="fas fa-times-circle vbo-icn-carat vbo-pref-color-text" @click="removeItem(item)"></i>
                </div>
            </div>
        </div>

        <div class="text-center mt-5">
            <button class="booking-button" data-bs-toggle="modal" data-bs-target="#SubmitPersonalInfoModal">РЕЗЕРВИРАЙ</button>
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
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
                  <button type="button" class="btn btn-primary" @click="sendReservation()">Резервирай</button>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section v-if="getCartItemsCount == 0" id="about-info" class="py-3">
        <h1 class="text-center">Количката е празна</h1>
    </section>
</template>

<style scoped>
.container:hover {
    background-color: #f7f8f3;
}

/* About Info */
#about-info .info-right{
    float:right;
    width:50%;
    min-height:100%;
}
#about-info .info-left{
    float:left;
    width:50%;
    min-height: 100%;
}

#about-info .info-right img{
    display:block;
    margin:auto;

    border-radius: 20%;
}

img {
    height: 25vh;
    width: 40vh;
    border-style: solid;
    border-width: 1px;
}

.container {
    border-bottom-style: solid;
    border-bottom-width: 0.2px;
    border-bottom-color: rgb(156, 156, 160);
    position: relative;
}

.close {
    float: right;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 5px;
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