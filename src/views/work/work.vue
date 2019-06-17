<template>
    <el-container class="page page-home">
        <el-header class="home-header">
                <h1>评价标准管理</h1>
                <div class="right userInfor">
                    <i class="iconfont icon-ren3"></i>
                    <em>{{userName}}</em>
                </div>
        </el-header>
        <el-container>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true" background-color="#34495E">
                    <el-submenu index="/home">
                        <template slot="title">
                            <span slot="title">首页</span>
                        </template>
                        <el-menu-item index="/home"><i class="iconfont icon-daohang"></i>首页</el-menu-item>
                         <el-menu-item index="/home"><i class="iconfont icon-daohang"></i>评价规则设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/accommodationManage">
                        <template slot="title">
                        <i class="iconfont icon-xinxiguanli1"></i>
                            <span slot="title">学生管理</span>
                        </template>
                        <el-menu-item index="/campusManage"><i class="iconfont icon-daohang"></i>学生信息管理</el-menu-item>
                        <el-menu-item index="/apartmentManage"><i class="iconfont icon-daohang"></i>学生评价管理</el-menu-item>
                    </el-submenu>
                    <el-submenu>
                        <template slot="title">
                        <i class="iconfont icon-xinxiguanli1"></i>
                            <span slot="title">学院管理</span>
                        </template>
                        <el-menu-item index="/studentManage"><i class="iconfont icon-daohang"></i>学级管理</el-menu-item>
                        <el-menu-item index="/studentManage"><i class="iconfont icon-daohang"></i>科系与专业管理</el-menu-item>
                        <el-menu-item index="/studentManage"><i class="iconfont icon-daohang"></i>班级管理</el-menu-item>
                        <el-menu-item index="/studentManage"><i class="iconfont icon-daohang"></i>学期设置</el-menu-item>
                    </el-submenu>
               
            </el-menu>
            <el-main class="contain padding-0">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { InitInfo} from '@/api';
  import { jquery } from '@/script/jquery-1.7.1';
export default {
    data(){
        return{
            left:true,
            right:false,
            isCollapse:false,
            label:true,
            font:"",
            userName:'',
            menuData:'',
            index:''

        }
    },
    methods:{
        menu(flag){
            if(flag==false){
                this.isCollapse =true;
                this.font = 'bigfont'
            }else if(flag==true){
                this.isCollapse =false;
                this.font = ''
            }
        },
        handleOpen(){

        },
        handleClose(){

        },
        async menuList(){
             var params = {};
            var res = await InitInfo(params);
            if(res.code == 200){
                this.menuData = res.data.menuInfo;
            }
         }

    },
    mounted(){
        this.menuList();
    }
}
</script>
<style lang="stylus">
    .page-home{
        width:100%;
        height:100vh;
        background-color:#ECF0F5;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
            
        }
        .home-header{
            height:60px;
            background-color:#24292E;
            text-align:left;
            line-height:60px;
            color:#fff;
            h1{
                font-weight:700;
                display:inline-block;
                width:200px;
            }
            h3{
                display:inline-block;
            }
            .userInfor{
                em{
                    font-style:normal;
                }
                .iconfont{
                    font-size:36px;
                    color:#333;
                }
            }

        }
        .el-menu{
             border-right:1px solid #dcdcdc;
             height:100%;            
            .el-menu-item{
                height:60px;
                line-height:60px;
                text-align:left;
                font-size:15px;
                 color:rgba(255,255,255,0.6);
                 border-bottom:2px solid #314559;
                i{
                    display:inline-block;
                    width:20px;
                    font-size:16px;
                    padding-right:10px;
                    color:#fff;
                }
            }
            .el-submenu__title{
                text-align:left;
                height:40px;
                line-height:40px;
            }
        }
        .contain{
            height:100%;
            .el-container{
                width:100%;
                height:100%;
            }
            .line-60{
                background-color:#fff;
                line-height:60px;
            }
        }
    }
</style>
    