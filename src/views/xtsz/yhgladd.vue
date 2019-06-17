<template>
    <div class="page page-xjgl">
        <el-container>
            <el-header>
                <div class="left backjt">管理员</div>
                <div class="left">新管理员</div>
            </el-header>
            <el-main>
                <div class="left ztnr">
                    <div class="width100 align-left padding-left-20 line">
                        <div class="left lineone"></div>
                        <div class="left linetwo">
                            账号
                        </div>
                        <div class="left linethree"></div>
                    </div>
                    <div class="over width100 zynr align-left">
                    <el-form :inline="true" :model="form" class="demo-form-inline" label-position="top">
                        <el-form-item label="账号">
                            <el-input v-model="form.zh" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.zh" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.zh" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="form.zh" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <p>角色</p>
                            <span class="fu-title">为当前管理员创建角色</span>
                            <el-radio-group v-model="form.js">
                                <el-radio label="管理员" value="1"></el-radio><br/>
                                <el-radio label="管理员" value="1"></el-radio><br/>
                                <el-radio label="管理员" value="1"></el-radio><br/>
                                <el-radio label="管理员" value="1"></el-radio><br/>
                                <el-radio label="管理员" value="2"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                          <el-form-item style="width:100%">
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        
                    </el-form>
                        
                    </div>
                </div>
                <div class="left upload">
                    <p class="align-left">上传头像</p>
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="iconfont icon-shangchuan"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
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
        </el-container>
       
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dialogVisible:false,
                dialogVisible2:false,
                dialogImageUrl: '',
                dialogVisible: false,
                form:{
                    zh:'',
                    js:'',                }
            }
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            addXj(){

            },
            deleteEvent(){

            },
            onSubmit(){

            },
             
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
            padding:0px 0px;
            .iconfont {
                display:inline-block;
                font-size:14px;
                padding-right:20px;
            }
            .line{
                 padding-top:20px;
                .lineone{
                    height:36px;
                    width:80px;
                   
                    border-bottom:2px solid #D0D0D0;
                }
                .linetwo{
                    width:80px;
                    height:36px;
                    text-align:center;
                    line-height:40px;
                    background-image:url('../../image/line.png');
                    background-size:100% 100%;
                }
                .linethree{
                    width:calc(100% - 160px);
                    height:36px;
                     border-bottom:2px solid #D0D0D0;
                     margin-left:-3px;

                }
            }
            .ztnr{
                width:calc(100% - 300px);
                height:100%;
                .zynr{
                     padding:20px;
                     .el-form-item{
                         width:45%;
                         padding:0px 20px;
                         .el-radio-group{
                             width:100%;
                             line-height:40px;
                             .el-radio{
                                 
                             }

                         }
                        p{
                            padding:0px;
                            line-height:26px
                        }
                        .fu-title{
                            color:#8C8B8A;
                        }
                     }
                }
               
            }
             .upload{
                    width:300px;
                    height:100%;
                    background-color:#ECF0F1;
                    padding:20px;
                    p{
                        padding:20px 0px;
                    }
                    .el-upload{
                        width:100%;
                        .iconfont{
                            font-size:80px;
                        }
                    }
                }
             
        }
       
        
    }
    
</style>