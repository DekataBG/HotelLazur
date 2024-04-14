<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

    const props = defineProps({
        links: {
            type: Array,
            required: true
        },
        hotelName: {
            type: String,
            required: true
        }
    })

    const changeActive = (clickedLink, allLinks) => {
        allLinks.forEach(link => {
            link.isOpen = (link === clickedLink)
        });
    }
</script>

<template>
    <nav id="navbar">
        <div class="container">
            <RouterLink to="/">
                <h2 class="logo"><a href="index.html">{{hotelName}}</a></h2>
            </RouterLink>
            <ul>
                <RouterLink 
                    :to="link.path"
                    v-for="link in links"
                    :key="link.id"
                    @click="changeActive(link, links)"
                >
                    <li>
                        <a :class="link.isOpen ? 'current' : '!current'">{{link.title}}</a>
                    </li>
                </RouterLink>

            </ul>
        </div>
    </nav>  
</template>

<style scoped>
/* Navbar */
#navbar{
    background:#333;
    color:#fff;
    overflow:auto;
}

#navbar a{
    color:#fff
}

#navbar h2{
    float:left;
    padding-top:20px;
}

#navbar ul{
    list-style:none;
    float:right;
}

#navbar ul li {
 float:left;
}

#navbar ul li a{
    display:block;
    padding:20px;
    text-align: center;
}

#navbar ul li a:hover,
 #navbar ul li a.current{
    background:#444;
    color:#f7c08a;
}
</style>