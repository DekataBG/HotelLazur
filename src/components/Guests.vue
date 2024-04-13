<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    hotelName: {
        type: String,
        required: true
    }
})

</script>

<template>
    <section id="testimonials" class="py-3">
        <div class="container">
            <h2 class="l-heading ">What our guests say</h2>
            <div class="testimonial bg-primary-background">
                <img src="../assets/img/person-1.jpg" alt="Samanta">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eveniet! Possimus neque nobis quis cum tenetur harum error exercitationem ab, quia obcaecati illo praesentium, dolore inventore suscipit iusto laborum nostrum ratione, illum aliquid repellat quas impedit. Voluptatum omnis voluptatem assumenda.</p>
            </div>
            <div class="testimonial bg-primary-background">
                <img src="../assets/img/person-2.jpg" alt="Jen">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eveniet! Possimus neque nobis quis cum tenetur harum error exercitationem ab, quia obcaecati illo praesentium, dolore inventore suscipit iusto laborum nostrum ratione, illum aliquid repellat quas impedit. Voluptatum omnis voluptatem assumenda.</p>
            </div>
    </div>
    </section>
</template>

<style scoped>
#testimonials{
    height:600px;
    background:url('../assets/img/guests-bg.jpg') no-repeat center center/cover;
    padding-top:100px;
}

#testimonials .testimonial img{
    width:100px;
    float:left;
    margin-right:40px;
    border-radius:50%;
}

#testimonials h2{
    color:#fff;
    text-align:center;
    padding-bottom:55px;
}

#testimonials .testimonial{
    padding:20px;
    margin-bottom:40px;
    border-radius:5px;
    opacity: 0.85;
}
</style>