<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    features: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section id="features" class="row bg-light">
        <div class="col-md-3" v-for="feature in features" :key="feature.id">
            <div :class="feature.id % 2 == 0 ? 'box bg-light' : 'box bg-primary-background'">
                <h3>{{feature.title}}</h3>
                <p>{{feature.description}}</p>
            </div>
        </div>
    </section>
    
</template>

<style scoped>
/* Features */
.box{
    float:left;
    widows: 33.5%;
    padding:60px;
    text-align:center;
}

.box i{
    margin-bottom:10px;
}

</style>