<template>
    <div class="page page-xjgl">
        <el-container>
            <el-header>
            <div class="left backjt">学生</div>
            <div class="left colorhs">编辑学生</div>
        </el-header>
        <el-main>
                <el-form :inline="true" :model="form" class="demo-form-inline" label-position="top">
                    <el-form-item label="学号" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="学级" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="科系">
                        <el-select v-model="form.xh" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业">
                        <el-select v-model="form.xh" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="班级">
                        <el-select v-model="form.xh" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.xh" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期">
                       <el-date-picker
                            v-model="form.rq"
                            type="date"
                            placeholder="出生日期">
                        </el-date-picker>
                    </el-form-item>
                     <el-form-item label="民族" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="籍贯" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="家长姓名" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="家长电话" >
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="家庭住址" style="width:100%;">
                        <el-input v-model="form.xh" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="上传头像" style="width:100%;">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
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
                form:{
                    xh:'1223',
                    rq:'',
                },
                imageUrl:''
            }
        },
        methods:{
            addXj(){

            },
            onSubmit(){

            },
              handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
            padding:0px;
            line-height:60px;
           
            >div{
                width:120px;
                font-size:16px;
            }
            .backjt{
                background-image:url('../../image/jt.png');
                background-size:100% 100%;
                 color:#fff;
            }
        }
        .el-main{
            .el-form{
                .el-form-item{
                    width:48%;
                    text-align:left;
                     .el-select{
                        width:100%; 
                    }
                    .avatar-uploader{
                         
                        .el-upload{
                            border: 1px dashed #d9d9d9;
                            border-radius: 6px;
                            cursor: pointer;
                            position: relative;
                            overflow: hidden; 
                        }
                       
                    }
                    .avatar {
                            width: 178px;
                            height: 178px;
                            display: block;
                    }
                }
               
            }
        }
       
        
    }
    
</style>