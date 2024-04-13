<script setup>

</script>

<template>
    <section id="about-info" class="bg-light py-3">
        <div class="container">
            <div class="info-left">
                <h1 class="l-heading"> <span class="text-primary-button">About</span> our Hotel </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi omnis fugiat, quasi saepe provident non nulla itaque porro alias error. Similique repellendus odit enim illum, iusto tempore libero obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus architecto labore facere expedita recusandae nesciunt beatae laudantium dolores rerum!</p>
            </div>
            <div class="info-right">
                <img src="../assets/img/photo-2.jpg" alt="Hotel">
            </div>
        </div>
    </section>
</template>

<style scoped>
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
    width:70%;
    border-radius:50%;
}
</style>