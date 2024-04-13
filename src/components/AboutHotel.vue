<script setup>

</script>

<template>
    <section id="home-info" class="bg-dark">
        <div class="info-img"></div>
        <div class="info-content">
            <h2><span class="primary-text">History</span> of our Hotel</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
              aliquam dolor alias iste autem, quaerat magni unde accusantium qui
              fuga placeat quidem quo pariatur, voluptatum, ea sequi? Corporis,
              explicabo quisquam dolor placeat praesentium nesciunt mollitia quos
              nobis natus voluptatum asperiores!
            </p>
            <a href="about.html" class="btn btn-light">Read More</a>
        </div>
    </section>
</template>

<style scoped>
/* hotel info */

#home-info {
    height: 400px;
  }
  
  #home-info .info-img {
    float: left;
    width: 50%;
    background: url('../assets/img/photo-1.jpg') no-repeat;
    min-height: 100%;
  }
  
  #home-info .info-content {
    float: right;
    width: 50%;
    height: 100%;
    text-align: center;
    padding: 50px 30px;
    overflow: hidden;
  }
  
  #home-info .info-content p {
    padding-bottom: 30px;
  }

</style>