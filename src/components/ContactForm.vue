<script setup>

</script>

<template>
    <section id="contact-form" class="py-3">
        <div class="container">
            <h1 class="l-heading"><span class="primary-text">Contact </span> Us</h1>
            <p>Please fill in all spots so you can contact us</p>
            <form>
                <div class="form-group">
                    <laber for="name">Name</laber>
                    <input type="text" name="Name" id="Name">
               </div>
               <div class="form-group">
                    <laber for="email">Email</laber>
                    <input type="email" name="email" id="email">
               </div>
               <div class="form-group">
                    <laber for="message">Message</laber>
                    <textarea type="email" name="message" id="message"></textarea>
               </div>
               <button type="submit" class="btn">Submit</button>
           </form>
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