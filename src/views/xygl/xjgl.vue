<template>
    <div class="page page-xjgl">
        <el-header>
            <div class="left backjt">学院管理</div>
            <div class="left">学级管理</div>
        </el-header>
        <el-main>
            <div>
                <div class="width100 align-left padding-left-20" >
                    <el-button type="primary" @click="dialogVisible = true"><i class="iconfont icon-jiashang"></i>增加</el-button>
                </div>
                <div class="over width100 zynr">
                    <div class="nj-content">
                        <div class="left">2018</div>
                        <div class="right">
                            <el-button class="buttonback"><i class="iconfont icon-jiashang"></i>编辑</el-button>
                            <el-button @click="dialogVisible2 = true" class="buttonback"><i class="iconfont icon-jiashang"></i>删除</el-button>
                        </div>
                    </div>
                    <div class="nj-content">
                        <div class="left">2018</div>
                        <div class="right">
                            <el-button class="buttonback"><i class="iconfont icon-jiashang"></i>编辑</el-button>
                            <el-button class="buttonback" @click="dialogVisible2 = true"><i class="iconfont icon-jiashang"></i>删除</el-button>
                        </div>
                    </div>
                    <div class="nj-content">
                        <div class="left">2018</div>
                        <div class="right">
                            <el-button class="buttonback"><i class="iconfont icon-jiashang"></i>编辑</el-button>
                            <el-button class="buttonback" @click="dialogVisible2 = true"><i class="iconfont icon-jiashang"></i>删除</el-button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <el-dialog
                title="学级"
                :visible.sync="dialogVisible"
                width="30%" class="align-left">
                <div>   
                    <el-input></el-input>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addXj()">确 定</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="删除"
                :visible.sync="dialogVisible2"
                width="30%">
                <span>您确定要删除这个年级</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="deleteEvent()">确 定</el-button>
                </span>
            </el-dialog>


            
        </el-main>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dialogVisible:false,
                dialogVisible2:false
            }
        },
        methods:{
            addXj(){

            },
            deleteEvent(){

            }
        }
    }
</script>
<style lang="stylus" scoped>
    .page-xjgl{
        .el-header{
            background-color:#D0D9DD;
            color:#fff;
            padding:0px;
            line-height:60px;
            >div{
                width:120px;
                font-size:16px;
            }
            .backjt{
                background-image:url('../../image/jt.png');
                background-size:100% 100%;
            }
        }
        .el-main{
            padding:20px 0px;
            .iconfont {
                display:inline-block;
                font-size:14px;
                padding-right:20px;
            }
             .zynr{
                .nj-content{
                    overflow:hidden;
                    padding:10px 20px;
                    line-height:40px;
                    button{
                        background-color:#EEEFF0;
                        color:#86939D;
                        
                    }
                }
                >div:nth-child(2n){
                    background-color:#ECF0F1;
                    
                }
            }
        }
       
        
    }
    
</style>