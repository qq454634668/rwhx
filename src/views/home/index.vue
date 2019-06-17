<template>
    <div class="page page-index">
      <el-container>
        <el-main class="align-left over" >
           <el-form :inline="true" :model="form" class="demo-form-inline align-left left">
             <el-form-item label="">
                <el-select v-model="form.xj" placeholder="科系">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="">
                <el-select v-model="form.xj" placeholder="专业">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="">
                <el-select v-model="form.xj" placeholder="专业所在班级">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="">
                <el-select v-model="form.xj" placeholder="专业所在班级">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="">
                <el-select v-model="form.xj" placeholder="专业所在班级">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
          <div class="button-style left">
            <el-button type="primary" @click="onSubmit">增加对比</el-button>
             <el-button type="primary" @click="onSubmit">生成图表</el-button>
          </div>
          <div class="clear"></div>
          <div class="over">
              <div class="left dbxq">
                  <ul class="dbnr">
                    <li>
                       <span>会计</span>
                       <span>》》》</span>
                    </li>
                  </ul>
              </div>
              <div class="left"></div>
          </div>
             <!-- <div class="left">11</div>
             <div class="left">222</div>
             <div class="left">222</div>
             <div class="left">222</div> -->
        </el-main>
      </el-container>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { jquery } from '@/script/jquery-1.7.1';
export default {
    data(){
      return{
       form:{
         xj:'',
       }
      }  
    },
    methods:{
      onSubmit(){

      }
    

    },
    mounted(){
    }
}
</script>
<style lang="stylus" scoped>
    .page-index{
      .el-form{
        width:1200px;
      }
      .button-style{
      }
      .dbxq{
        width:1200px;
        padding:20px 0;
        .dbnr{
          width:100%;
          >li{
            width:100%;
            height:50px;
            line-height:50px;
            padding:0 20px;
            background-color:#EFEFEF;
            border:1px solid #E3E5E6;
          }
        }
      }
    }
</style>




