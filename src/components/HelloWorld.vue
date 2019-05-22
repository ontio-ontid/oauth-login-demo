<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handleLogin('wechat')" id="ontid_wechat_login">微信登录</button>
    <!-- <button @click="handleLogin('qq')" id="ontid_wechat_login">QQ登录</button> -->
    <button @click="handleLogin('facebook')" id="ontid_wechat_login">Facebook登录</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dapp_ontid: 'did:ont:ANqiHycikgyzkfz36faP5ymXLVg1uovhXh'
    }
  },
  mounted() {

  },
  methods: {
    handleLogin(provider) {
      const redirect_url = encodeURIComponent(window.location.origin + '/home')
      const url = `http://signin.chinaeast.cloudapp.chinacloudapi.cn:10390/oauthmiddle?dapp_ontid=${this.dapp_ontid}&oauth_type=${provider}&redirect_url=${redirect_url}&lang=zh`
      window.location.href = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
