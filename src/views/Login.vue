<template>
    <div class="login-container">
        <div class="login-region">
            <h3>Login</h3>
            <a-input v-model:value="username" placeholder="请输入用户名" size="large" :style="{ margin: '0 0 20px 0' }">
                <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
            <a-input-password v-model:value="password" placeholder="请输入密码" size="large">
                <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input-password>
            <a-button :loading="loading" type="primary" size="large" :style="{ margin: '20px 0 0 0', width: '100%'}" @click="loginSubmit">Login</a-button>
        </div>
    </div>
</template>

<script>
import { postLogin } from '@/api/login';

export default {
    data() {
        return {
            loading: false,
            username: '',
            password: '',
        }
    },
    methods: {
        async loginSubmit() {
            this.loading = true;
            const data = {
                username: this.username,
                password: this.password,
            }
            try {
                const response = await postLogin(data);
                localStorage.setItem("user", data.username);
                document.cookie = `token=${response.data.token}; path=/`;
                this.$router.push('/home');
            } catch (error) {
                console.log('error is ' + error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/bg.jpg');
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-region {
    max-width: 400px;
    padding: 20px;
    background-color: transparent;
}
h3 {
    font-size: 26px;
    color: #eee;
    text-align: center;
    margin: 0 auto 40px auto;
}
</style>
