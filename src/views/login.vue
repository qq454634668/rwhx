<template>
    <div class="page page-login">
        <el-container>
            <el-header>
                商学院
            </el-header>
            <el-main>
                <div>
                    <div class="login">
                        <el-form :label-position="labelPosition" label-width="80px" :model="form">
                            <el-form-item label="用户名">
                                <el-input v-model="form.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="form.password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('form')"   @keyup.enter="submitForm('form')">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-main>
             <el-footer>
                <div>
                    <div>
                         
                    </div>
                </div>
            </el-footer>
        </el-container>
    
    </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { requestLogin} from '@/api';
  import { jquery } from '@/script/jquery-1.7.1';
export default {
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            labelPosition:'right'
        }
    },
    methods:{
        submitForm(form){
            this.login()
        },
         async login(){
             var params = { 
                username: this.form.username, 
                password: this.form.password,
            };
            var res = await requestLogin(params);
            if(res.code == 200){
                var token = res.data;
                localStorage.setItem('token',token);
                this.$router.push({ path: '/home' });
            }
         },

    },
    mounted(){
        
    }
}
</script>
<style lang="stylus" scoped>
    .page-login{
        .login{
            width:300px;
            height:300px;
            background-color:#fff;
        }
    }
</style>
