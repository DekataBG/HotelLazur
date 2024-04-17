<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

    const props = defineProps({
        links: {
            type: Array,
            required: true
        }
    })

    const changeActive = (clickedLink, allLinks) => {
        allLinks.forEach(link => {
            link.isOpen = (link === clickedLink)
        });
    }

    import { useRoute } from 'vue-router'
    const route = useRoute()
    const currentPath = route.path
    // End of type declarations
    console.log(route.path)

</script>

<template>
    <nav id="navbar">
        <div class="container">
            
            <RouterLink to="/">
                <img class="logoimage" src="../assets/img/logo.png" alt="Samanta">
            </RouterLink>
            <ul>
                <RouterLink 
                    :to="link.path"
                    v-for="link in links"
                    :key="link.id"
                    @click="changeActive(link, links)"
                >
                    <li>
                        <a :class="currentPath == link.path ? 'current' : '!current'">{{link.title}}</a>
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

.logoimage {
    width: 17vh;
    height: 9vh;
}
</style>