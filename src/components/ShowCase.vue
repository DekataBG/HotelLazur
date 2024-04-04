<script setup>

</script>

<template>
    <div id="showcase">
        <div class="container">
            <div class="showcase-content">
                <h1><span class="text-primary-button">Enjoy</span> your stay</h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam quos quisquam obcaecati illo facilis.</p>
                <a class="btn" href="about.html">About our hotel</a>
            </div>
        </div>
    </div>    
</template>

<style scoped>
/* showcase */

#showcase{
    background-image: url('../assets/img/showcase.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 1050px;
}

#showcase .showcase-content{
    color:#fff;
    text-align:center;
    padding-top:500px;
}

#showcase .showcase-content h1{
    font-size:75px;
    line-height:1.2em;
}

#showcase .showcase-content p {
    padding-bottom:20px;
    line-height: 1.7em;
}
</style>