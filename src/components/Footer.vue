<template>
    <div class="footer">
            <div class="footer_left">
                 <div class="footer_left_title">BIZ HAQIMIZDA</div>
                 <div class="footer_left_img"><img src="../assets/images/logo.png" width="120" alt=""></div>
            </div>
            <div class="footer_center">
                <div class="footer_center_title">
                    ALOQA
                </div>
                <div class="footer_center_adress">
                    <div class="icon">
                        <n-icon size="20">
                            <Location16Regular />
                        </n-icon>
                    </div>
                    <div class="text">130100.Jizzax viloyati, Jizzax shahri, Sharof Rashidov ko'chasi, 4-uy.</div>
                </div>
                <div class="footer_center_ij">
                    <div class="phone">
                        <n-icon size="20">
                            <PhoneCall />
                        </n-icon>
                        +(99872) 226 13 57
                    </div>
                    <div class="email">
                        <n-icon size="20">
                            <EmailOutlined />
                        </n-icon>
                        jiz.jdpi@exat.uz
                    </div>
                </div>
            </div>
            <div class="footer_right">
                <div class="footer_right_title">IJTIMOIY TARMOQLARDA</div>
                <ul>
                    <li>
                            <n-icon size="30">
                             <BrandTelegram />
                            </n-icon>
                    </li>
                    <li>
                        <n-icon size="30">
                             <BrandInstagram />
                            </n-icon>
                    </li>
                    <li>
                        <n-icon size="30">
                             <FacebookTwotone />
                            </n-icon>
                    </li>
                    <li>
                        <n-icon size="30">
                             <LogoTwitter />
                            </n-icon>
                    </li>
                    <li>
                        <n-icon size="30">
                             <LogoYoutube />
                            </n-icon>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script setup>
 import {PhoneCall,BrandTelegram,BrandInstagram} from "@vicons/tabler";
 import {Location16Regular} from "@vicons/fluent";
 import {FacebookTwotone,EmailOutlined} from "@vicons/material";
 import {LogoTwitter,LogoYoutube} from "@vicons/ionicons5";
</script>

<style scoped>
.footer{
    width: 100%;
    height: 260px;
    background-color: rgb(5, 40, 134);
    display: flex;
    justify-content: space-around;
    color: white;
}
.footer .footer_left{
    width: 15%;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.footer_left .footer_left_title,.footer_center .footer_center_title,.footer_right .footer_right_title{
    font-size: 16px;
    border-bottom: 2px solid white;
    margin-bottom: 40px;
}
.footer_right .footer_right_title{
    margin-bottom: 80px;
}
.footer .footer_center{
    width: 25%;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.footer_center .footer_center_ij{
    width: 330px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer_center .footer_center_adress{
     width: 330px;
     display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer_center_adress .icon{
    margin-right: 20px;
    margin-left: 10px;
}
.footer_center .footer_center_ij .phone, .email{
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 10px;
}

.footer .footer_right{
    width: 25%;
    /* border: 2px solid grey; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.footer_right ul{
    list-style: none;
    display: flex;
}
.footer_right ul li{
    margin: 0px 6px;
}
</style>