<template>
     <div class="container">
         <div class="login_top">
              <div class="login_about">
                  <ul>
                    <li><img src="../../assets/images/logo.png" alt=""></li>
                    <li style="color: white; font-size: 27px; text-align: center">Iqtidorli <br> talabalar!</li>
                    <li style="color: white; margin-top: -10px; font-size: 14px">tizimiga xush kelibsiz!</li>
                    <li style="color: rgb(241, 194, 131); font-size: 14px">
                        Tizimda profilingiz yo'qmi?
                        <span @click="Register"> Hozir ro'yxatdan o'ting!</span>
                    </li>
                    <li>
                        Adminlar uchun
                        <span style="font-size: 14px">Bu yerga bosing</span>
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                    <div class="header">Kirish</div>
                   <n-form ref="formRef" :model="model" :rules="rules">
                    <n-form-item label="Email" path="email">
                    <n-input 
                        class="input" 
                        v-model:value="model.email" 
                        @keydown.enter.prevent 
                        size="large" 
                        clearable
                        />
                    </n-form-item>
                    <n-form-item path="password" label="Password">
                    <n-input
                        v-model:value="model.password"
                        :type="input_type"
                        @input="handlePasswordInput"
                        @keydown.enter.prevent
                        size="large"
                        class="input input_password"
                         clearable
                    />
                     <n-icon class="eye_icon" size="20">
                    <EyeOffOutline @click="handleInput" />
                    </n-icon>
                    </n-form-item>
                    <!-- <n-form-item
                    ref="rPasswordFormItemRef"
                    first
                    path="reenteredPassword"
                    label="Re-enter Password"
                    >
                    <n-input
                        v-model:value="model.reenteredPassword"
                        :disabled="!model.password"
                        type="password"
                        @keydown.enter.prevent
                    />
                    </n-form-item> -->
                    <n-row :gutter="[0, 24]">
                    <n-col :span="24">
                        <div style="display: flex; justify-content: center">
                        <n-button
                            :disabled="model.email === null"
                            type="info"
                            @click="handleValidateButtonClick"
                            class="Kirish"
                        >
                            Kirish
                        </n-button>
                        </div>
                    </n-col>
                    </n-row>
                   </n-form>
                    <div class="password_remember">Parolni unitdingizmi?</div>
              </div>
         </div>
         <div class="login_footer">
              <div class="foter_name">
                  2023 © O'zMUJF
              </div>
              <div class="foter_link">
                  RTTM tomonidan ishlab chiqilgan
              </div>
         </div>
    </div>
</template>
<script setup>
import {ref} from "vue"; 
import {useMessage} from "naive-ui";
import { EyeOffOutline } from "@vicons/ionicons5";
import {useRouter} from "vue-router"
const formRef = ref(null);
const router = useRouter();
const rPasswordFormItemRef = ref(null)
const message = useMessage();
let input_type = ref("password")
let model = ref({
    email: "",
    password: "",
    reenteredPassword: ""
})
    let validatePasswordStartWith = (rule, value) => {
        return !!model.value.password && model.value.password.startsWith(value) && model.value.password.length >= value.length
    }
    let validatePasswordSame = (rule,value) => {
        return value === model.value.password;
    }
let rules = {
    email: [
        {required: true,
        validator(rule, value){
            if(!value){
                return new Error("Email is required");
            } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(model.value.email)) {
              return new Error("Email should be an integer");
            } else if (Number(value) < 18) {
              return new Error("Email should be above 18");
            }
            return true;
            },
        trigger: ["input", "blur"]
        }
    ],
    password: [
        {
          required: true,
          message: "Password is required"
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: "Re-entered password is required",
          trigger: ["input", "blur"]
        },
        {
          validator: validatePasswordStartWith,
          message: "Password is not same as re-entered password!",
          trigger: "input"
        },
        {
          validator: validatePasswordSame,
          message: "Password is not same as re-entered password!",
          trigger: ["blur", "password-input"]
        }
      ]
}
const handlePasswordInput = () => {
    if (model.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
        }
}
const handleValidateButtonClick = (e)=> {
        e.preventDefault();
        formRef.value?.validate(
          (errors) => {
            if (!errors) {
              message.success("Valid");
            } else {
              message.error("Fo'rmalarni to'ldirish shart");
            }
          }
        );
      }
const handleInput = () => {
     return input_type.value === "password" ? input_type.value = "text" : input_type.value = "password"
}
const Register = () => {
     router.push("/register")
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.login_top{
    width: 70%;
    min-height: 520px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    width: 33%;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-evenly;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 20px 0px;
}
.login_top .login_about ul li span{
    display: inline;
    color: aqua;
    transition: all 0.5s ease-in-out;
}
.login_top .login_about ul li span:hover{
    color: blue;
    cursor: pointer;
}
.Kirish{
    width: 450px !important;
}
.input{
    width: 500px !important;
}
.input_password{
    width: 500px !important;
    position: relative;
}
.login_kirish{
    width: 70%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.eye_icon{
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
}
.header, .password_remember{
    width: 70%;
    text-align: center;
    cursor: pointer;
}
.header{
    font-size: 25px;
    font-family: sans-serif;
    color: blue;
}
.login_footer{
    width: 99%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(100, 99, 99);
}
.foter_name{
    width: 35%;
    text-align: right;
}
.foter_link{
    width: calc(100% - 35%);
    text-align: right;
    margin-right: 30px  ;
}
</style>