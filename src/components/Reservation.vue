<script setup>

</script>

<template>
    <section id="about-info" class="py-3">
        <div class="container">
            <div class="info-left">
                <h1 class="l-heading"> Име на стая </h1>
                <p>Цена</p>
            </div>
            <div class="info-right">
                <img :src="С" :alt="СнимкаНаСтаята">
                <div class="close">
                    <i class="fas fa-times-circle vbo-icn-carat vbo-pref-color-text"></i>
                </div>
            </div>
        </div>

        <div class="text-center mt-5">
            <button class="booking-button">РЕЗЕРВИРАЙ</button>
        </div>
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