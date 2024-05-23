<template>
    <div :style="{ display: 'inline-block', float: 'right', margin: '0 25px 0 0' }">
        <a-dropdown>
            <a>
                Hover me
                <DownOutlined />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>1st menu item</a-menu-item>
                    <a-menu-divider />
                    <a-menu-item @click="LoginOut()">Sign Out</a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<script>
import { message } from 'ant-design-vue'

export default {
    methods: {
        LoginOut() {
            // 获取当前所有的cookie
            const cookies = document.cookie.split('; ');
            // 遍历所有的cookie，并将它们的过期时间设置为过去的时间
            for (let i = 0; i < cookies.length; i++) {
                const cookieParts = cookies[i].split('=');
                const cookieName = cookieParts[0];
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
            }
            //
            localStorage.clear();
            this.$router.push('/login');
            message.success('SignOut Successful');
        }
    }
}
</script>
