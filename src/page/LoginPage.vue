<script setup>
import { ref } from 'vue';
import axios from "axios";
const input = ref('')
const inputpsw = ref('')
const giteedata = ref({
    grant_type: '',
    username: '1011542415@qq.com',
    password: '2004817Lcz.',
    client_id: '194ce973ee99f056972aedc365aeb1e4fdf5b2bf38ef00b52698951a1e9ea1b9',
    client_secret: '52ac8afc8cc90c1c8cd0ce5319a0a1b17a0da3641b52de9dca365143972812fa',
    scope: 'projects'
});
const handleClick = () => {
    axios.post('https://gitee.com/oauth/token', giteedata)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);

        })
};
</script>
<template>
    <header>
        <section><img src="../static/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"></section>
        <div class="biglogin">
            <div class="loginbox">
                <h1 style="text-align: center;">登录，即刻创造您的应用</h1>
                <div class="switchlogin">
                    <p>手机号登陆</p>
                    <p>账号密码登录</p>
                </div>
                <div class="textinput">
                    <p>
                        <el-input v-model="input" style="width: 350px; height: 50px;" placeholder="账号" />
                    </p>
                    <p>
                        <el-input v-model="inputpsw" style="width: 350px; height: 50px;" type="password"
                            placeholder="密码" show-password />
                    </p>
                </div>
                <el-checkbox label="我已阅读并同意服务协议和隐私协议" size="large" />
                <el-button type="primary" @click="handleClick">登录</el-button>
                <p style="text-align: center">
                    <span>还未注册？</span>
                    <span style="color: #409eff;">立即注册</span>
                </p>
            </div>
        </div>
    </header>
</template>
<style scoped>
header,
.switchlogin,
.biglogin,
.loginbox,
.textinput {
    display: flex;
}


img {
    width: 40vw;
    height: 99.5vh;
}

.biglogin {
    width: 50vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.loginbox {
    justify-content: center;
    flex-direction: column;
}

.switchlogin {
    justify-content: space-around;
}

.textinput {
    align-items: center;
    flex-direction: column;
}
</style>