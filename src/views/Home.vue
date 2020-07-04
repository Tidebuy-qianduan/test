
<template>
  <div class="home">

    用户名：<input type="text" v-model="username"/> >
    密码：<input type="text" v-model="password"/>
    <input type="submit" value="提交" @click="submit"/>

  </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {mapActions} from 'vuex';
    import axios from 'axios';
    import Qs from 'qs';

    export default {
        name: 'home',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(["handleLogin"]),
            submit() {
                this.handleLogin({
                    username: this.username,
                    password: this.password
                }).then(res=>{
                   this.getgetLoginSuccessUserInfo().then(res=>{
                       this.$router.push({
                          name:'home'
                       });
                   })
                })
            }
        }
        // components: {
        //   HelloWorld
        // }
    }
</script>
