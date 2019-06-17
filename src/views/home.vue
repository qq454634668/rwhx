<template>
    <el-container class="page page-home">
        <el-header class="home-header">
                <h1><i class="iconfont icon-jisuanqi"></i>评价标准管理</h1>
                <div class="right userInfor">
                    <i class="iconfont icon-ren3"></i>
                    <em>{{userName}}</em>
                </div>
        </el-header>
        <el-container>
            <el-menu default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
             :router="true" :unique-opened="false"
              background-color="#34495E"
              :default-openeds="['/home','/xxgl','/xjgl','/xjgl','/yhgl']"
            >
                    <el-submenu index="/home">
                        <template slot="title">
                            <div class="background-lv">
                               <i class="el-icon-arrow-down"></i>
                                <span slot="title">首页</span> 
                            </div>
                            
                        </template>
                        <el-menu-item index="/index"><i class="iconfont icon-performance"></i>首页</el-menu-item>
                         <el-menu-item index="/pjgz"><i class="iconfont icon-tubiaozhuzhuangtu2"></i>评价规则设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/xxgl">
                        <template slot="title">
                            <div class="background-lv">
                                <i class="el-icon-arrow-down"></i>
                                <span slot="title">学生管理</span>
                            </div>
                        </template>
                        <el-menu-item index="/xxgl"><i class="iconfont icon-sangeren1"></i>学生信息管理</el-menu-item>
                        <el-menu-item index="/pjgl"><i class="iconfont icon-jisuanqi2"></i>学生评价管理</el-menu-item>
                    </el-submenu>
                    <el-submenu index="/xjgl">
                        <template slot="title">
                            <div class="background-lv">
                                <i class="el-icon-arrow-down"></i>
                                <span slot="title">学院管理</span>
                            </div>
                            
                        </template>
                        <el-menu-item index="/xjgl"><i class="iconfont icon-guanlian"></i>学级管理</el-menu-item>
                        <el-menu-item index="/kxyzygl"><i class="iconfont icon-guanlian"></i>科系与专业管理</el-menu-item>
                        <el-menu-item index="/bjgl"><i class="iconfont icon-fangzi"></i>班级管理</el-menu-item>
                        <el-menu-item index="/xqsz"><i class="iconfont icon-guanlian"></i>学期设置</el-menu-item>
                    </el-submenu>
                     <el-submenu index="/yhgl">
                        <template slot="title">
                            <div class="background-lv">
                                <i class="el-icon-arrow-down"></i>
                                <span slot="title">系统设置</span>
                            </div>
                        </template>
                        <el-menu-item index="/yhgl"><i class="iconfont icon-sangeren1"></i>用户管理</el-menu-item>
                        <el-menu-item index="/jsgl"><i class="iconfont icon-sangeren1"></i>角色管理</el-menu-item>
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

    },
    mounted(){
    }
}
</script>
<style lang="stylus">
    .page-home{
        width:100%;
        height:100vh;
        background-color:#F9F9F9;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
            
        }
        .el-submenu__icon-arrow{
            display:none;
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
                .iconfont{
                    font-size:26px;
                    display:inline-block;
                    padding-right:20px;
                    font-weight:400;
                }
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
                    // width:20px;
                    font-size:20px;
                    padding-right:15px;
                    color:#fff;
                }
            }
            .el-submenu__title{
                text-align:left;
                height:50px;
                line-height:50px;
                position:relative;
                .background-lv{
                    position:absolute;
                    height:50px;
                    background-image:url('../image/menuback.png');
                    background-size:100% 100%;
                    left:0;
                    top:0;
                    bottom:0;
                    right:0;
                }
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
    