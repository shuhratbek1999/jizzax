<template>
    <div class="elon">
         <n-carousel show-arrow>
            <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_text"><n-button class="btn" type="success">{{item.button}}</n-button> </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_text"><n-button class="btn" type="success">{{item.button}}</n-button> </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_text"><n-button  class="btn" type="success">{{item.button}}</n-button> </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div class="news_text"><n-button class="btn" type="success">{{item.button}}</n-button> </div>
             </div>
        </div>
        </n-carousel>
    </div>
</template>

<script setup>
import {ref} from "vue";
import News1 from "../assets/images/bobur-10.jpg";
import News2 from "../assets/images/NAVRUZBEK.jpg";
import News3 from "../assets/images/photo.png";
import News4 from "../assets/images/photo.jpg";
const elonlar = ref([
    {
        id: 1, 
        img:  News1, 
        title: "Zahiriddin Muhammad Bobur ilmiy-ijodiy merosining jahon adabiyoti, ilm-fani va davlatchiligi tarixida tutgan o‘rni",
        button: "Batafsil"
    },
    {
        id: 2, 
        img: News2, 
        title: "Aziz talabalar! Siz uchun yana bir bor Xalqaro konferensiyada ishtirok etish uchun imkoniyat!",
        button: "Batafsil"
    },
    {
        id: 3, 
        img: News3, 
        title: "Tadqiqotchilik va kreativ sa’y-harakatlarni qo‘llaymiz",
        button: "Batafsil"
    },
    {
        id: 4, 
        img: News4, 
        title: "Zahiriddin Muhammad Bobur ilmiy-ijodiy merosining jahon adabiyoti, ilm-fani va davlatchiligi tarixida tutgan o‘rni",
        button: "Batafsil"
    },
])
</script>
<style scoped>
.elon{
    width: 100%;
    height: 500px;
    /* background-color: grey; */
}

.elon_content{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap: wrap;
    /* border: 2px solid red; */
}
.elon_content .elon_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 23%;
    height: 400px;
    background-color: rgba(201, 197, 197, 0.4);
    margin: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.elon_content .elon_list:hover{
    transform: scale(0.95,1.04);
}
.elon_list .news_img{
    text-align: center;
    /* height: 200px; */
}
.elon_list .news_img img{
    height: 180px;
}
.elon_list .news_title{
    font-size: 16px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    /* font-style: */
}
.elon_list .news_text .btn{
    width: 280px;
    text-indent: 20px;
    font-size: 12px;
    font-family: sans-serif;
}
</style>