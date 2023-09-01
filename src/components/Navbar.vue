<template>
    <div class="navbar">
         <div class="navbar_item">
             <slot name="image">
                <img src="../assets/images/logo.png" width="50px" alt="">
             </slot>
         </div>
         <div class="navbar_item">
              <div class="navbar_list" @click="Reyting">Iqtidorli talabalar</div>
              <div class="navbar_list" @click="About">Biz haqimizda</div>
              <div class="navbar_list">Tanlovlar</div>
              <div class="navbar_list">Matbuot xizmati</div>
         </div>
         <div class="navbar_item">
            <slot name="button">
            <n-button type="info" @click="Dashboard">Dashboard</n-button>
            </slot>
         </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const Reyting = () => {
    router.push("/reyting")
}
const About = () => {
    router.push("/academy")
}
const Dashboard = () => {
    router.push("/dashboard")
}
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 100px;
     display: flex;
     justify-content: space-between;
    align-items: center;  
}
.navbar .navbar_item {
    /* width: 33%; */
    display: flex;
    justify-content: space-around;
}
.navbar .navbar_item img{
    width: 100px;
    /* border: 2px solid red; */
}
.navbar .navbar_item .navbar_list{
    padding: 0px 20px;
    color: black;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
}
.navbar .navbar_list:nth-child(2n + 4){
    color: white;
}
.navbar .navbar_item .navbar_list:hover{
    transform: scale(0.9);
}
</style>