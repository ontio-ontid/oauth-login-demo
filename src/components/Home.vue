<style>
.token {
    width:100%;
    padding:0 30px;
    word-break: break-all;
    box-sizing: border-box;
}
</style>
<template>
    <div>
        <p>Wechat Oauth2 succeed!</p>
        <p>
            Received access_token: 
        </p>
        <p class="token">{{access_token}}</p>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            access_token: ''
        }
    },
    mounted() {
        const {access_token} = this.$route.query;
        this.access_token = access_token;
        //Next need to send access_token to the dapp's backend to varify.
    }
}
</script>

