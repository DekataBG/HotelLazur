<script setup lang="ts">
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { createMessage } from '../plugins/api.ts'
import { addReservation } from '../plugins/api.ts';

async function sendMessage() {
    await createMessage("1", "2", "3")
    const $toast = useToast();
    $toast.open({
        message: 'Съобщението е изпратено',
        type: 'success',
        position: 'top'
    });
}
</script>

<template>
    <section id="contact-form" class="py-3">
        <div class="container">
            <h1 class="l-heading"><span class="primary-text">Свържете </span> се с нас</h1>
            <p>Моля, попълнете всички полета</p>
                <div class="form-group">
                    <laber for="name">Име</laber>
                    <input type="text" name="Name" id="Name">
               </div>
               <div class="form-group">
                    <laber for="email">Имейл</laber>
                    <input type="email" name="email" id="email">
               </div>
               <div class="form-group">
                    <laber for="message">Съобщение</laber>
                    <textarea type="email" name="message" id="message"></textarea>
               </div>
               <button @click="sendMessage()" class="btn">Изпращане</button>
        </div>
    </section>
</template>

<style scoped>
#contact-form .form-group{
    mairgin-bottom:20px;
}
#contact-form label{
    display:block;
    margin-bottom:5px;
}

#contact-form input, #contact-form textarea {
    width:100%;
    padding:10px;
    border:1px #ddd slod;
}

#contact-form textarea{
    height:200px;
}
#contact-form input:focus, #contact-form textarea:focus {
    outline:none;
    border-color:#f7c08a
}
</style>