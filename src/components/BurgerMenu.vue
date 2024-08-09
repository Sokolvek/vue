<template>
    <Transition name="slide-fade">
        <nav v-if="store.burgerMenu">
            <ul>
                <li @click="store.burgerMenu = false" v-for="item in menus" :key="item.title">
                    <a :href="'#' + item.href">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import {useCounterStore} from "../stores/counter" 


const store = useCounterStore()

const menus = [
    {
        title:"Главная",
        href:"#"
    },
    {
        title:"О нас",
        href:"aboutus"
    },
    {
        title:"Портфолио",
        href:"portfolio"
    },
    {
        title:"Обратиться",
        href:"contact"
    },

]

</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

nav{
    display: none;
}

a{
    color: white;
    text-decoration: none;
}

@media (max-width: 1319px) {
    nav{
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: black;
        top: 0;
        z-index: 5;
    }

    ul{
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 0;
        list-style: none;
        color: white;
        flex-direction: column;
        gap: 10px;
        padding-top: 100px;
    }

    li{
        cursor: pointer;
    }
}
</style>