<template>
    <div class="page page-pjdetail">
      <el-container>
       <el-header class="align-left">
           <span>高职</span>
           <span>>></span>
           <span>会计</span>
           <span>高职</span>
           <span>>></span>
           <span>会计</span>
       </el-header>
        <el-main style="padding-left:0px">
            <div class="pjsz">
                <table class="backfff" >
                    <thead>
                        <tr class="pjsz-title">
                            <td>一级指标</td>
                            <td>二级指标</td>
                            <td>三级指标</td>
                            <td>四级指标</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="verticalAlign">
                            <td class="pjsz-main oneji" style="width:20%;">
                                <table>
                                        <tr class ="static" v-for="(item,index) in oneList" :key="index" @click="oneClick(item.fjMenu.id,index)" v-bind:class="{ active: index == oneid }">
                                            
                                            <td class="nameMain">
                                                <p>
                                                    <span>{{item.fjMenu.name}}</span><br/>
                                                    <span>{{item.fjMenu.standard}}</span>
                                                </p> 
                                            </td>
                                            <td class="set">
                                                <p class="iconfont icon-set"> </p>
                                                <p class="iconfont icon-delete1" @click="deleteif(item.fjMenu.id)"></p> 
                                            </td>
                                        </tr>
                                     
                                </table>
                            </td>
                            <td class="pjsz-main twoji" style="width:20%;">
                                  <table>
                                    <tr v-for="(item,index) in twoList" :key="index" @click="twoClick(item.fjMenu.id,index)" class="static" v-bind:class="{ active: index == twoId }">
                                       
                                        <td class="nameMain">
                                            <p>
                                                <span>{{item.fjMenu.name}}</span><br/>
                                                <span>{{item.fjMenu.standard}}</span>
                                            </p> 
                                        </td>
                                        <td class="set">
                                            <p class="iconfont icon-set"> </p>
                                            <p class="iconfont icon-delete1"></p>
                                        </td>
                                    </tr>
                                   
                                </table>
                            </td> 
                            <td class="pjsz-main threeji" style="width:20%;" >
                                 <table>
                                    <tr class ="static" v-for="(item,index) in threeList" :key="index" @click="threeClick(item.fjMenu.id,index)" v-bind:class="{ active: index == threeId }">
                                       
                                        <td class="nameMain">
                                            <p>
                                                <span>{{item.fjMenu.name}}</span><br/>
                                                <span>{{item.fjMenu.standard}}</span>
                                            </p> 
                                        </td>
                                        <td class="set">
                                            <p class="iconfont icon-set"> </p>
                                            <p class="iconfont icon-delete1"></p>
                                        </td>
                                        
                                    </tr>
                                  
                                </table>
                            </td>
                            <td class="pjsz-main fourji" style="width:40%;">
                                 <table>
                                    <tr class ="static" v-for="(item,index) in fourList" :key="index" @click="fourClick(item.id,index)" v-bind:class="{ active: index == fourId }">
                                       
                                        <td class="nameMain">
                                            <p class="margin-20">
                                                <span>{{item.name}}</span><br/>
                                            </p> 
                                            <p class="csfz">
                                                <span>评分方式:加分</span>
                                                <span>初始分值:0.00</span>
                                                <span>参考分值:0.00</span>
                                            </p>
                                        </td>
                                        <td class="set">
                                            <p class="iconfont icon-set"> </p>
                                            <p class="iconfont icon-delete1"></p>
                                        </td>
                                    </tr>
                                   
                                </table>
                            </td>
                        </tr>
                     
                    </tbody>
                </table>
              
            </div>
            <div class="padding-left-20">
                <el-form ref="form" :model="form" label-width="80px" label-position="top"  class="align-left">
                    <el-form-item label="导师评价">
                         <el-input type="textarea" v-model="form.pj"></el-input>
                    </el-form-item>
                </el-form>
            </div>
           
        </el-main>
      </el-container>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { pjgzList,weightEdit,addQuota,delQuota} from '@/api';
  import { jquery } from '@/script/jquery-1.7.1';
export default {
    data(){
        var checkfz = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入分值'));
        }
         value = parseInt(value);
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value > 100) {
              callback(new Error('分值在100分以内'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return{
        oneid:0,
        twoId:0,
        threeId:0,
        disabledOne:true,
        disabledTwo:true,
        disabledThree:true,
        disabledFour:true,
        fourId:0,
        dataList:[],
        oneList:[],
        twoList:[],
        threeList:[],
        fourList:[],
        kongList:[],
        isActive:false,
        dialogVisible:false,
        dialogVisible2:false,
        addForm:{
            standard:'',
            name:'', 
            initial:'0', 
            type:'0',
        },
        deleteId:'',
        rules:{
            name:[
               { required: true, message: '请输入指标内容', trigger: 'blur' }
            ],
            standard:[
               { validator: checkfz, trigger: 'blur' }
            ],
            // initial:[
            //     { required: true, message: '初始分值不能为空', trigger: 'blur' }
            // ]  
        },
        labelPosition:'top',
        listPd:false,
        form:{
            pj:''
        }
      }  
    },
    methods:{
      oneClick(id,index){
          this.oneid = index;
          this.threeId = 0;
          this.fourId = 0;
          this.twoId = 0;
          this.xrsj()
      },
      twoClick(id,index){
            this.twoId = index;
            this.threeId = 0;
            this.fourId = 0;
          this.xrsj()
      },
      threeClick(id,index){
          this.threeId = index;
            this.fourId = 0;
          this.xrsj()
      },
      fourClick(id,index){
            this.fourId = index;
          this.xrsj()
      },
      xrsj(){
          this.oneList = this.dataList;
          this.twoList = this.oneList[this.oneid].zjMenu;
          this.threeList = this.twoList[this.twoId].zjMenu;
          this.fourList = this.threeList[this.threeId].zjMenu;
          console.log(this.fourList)
      },
      editWeight(list,disabledOne){
          var arry=[];
          var arry2 = [];
          var num = 0;
          if(disabledOne !== 4){
              for(var i = 0;i<list.length;i++){
                arry.push(list[i].fjMenu.weight);
                arry2.push(list[i].fjMenu.id);
                
                num = num+parseInt(list[i].fjMenu.weight);
            }
          }else{
            for(var i = 0;i<list.length;i++){
                arry.push(list[i].weight);
                arry2.push(list[i].id);
            }  
          }
         if(num>100){
              this.$message('总权重值不能超过100%');
         }else{
              var weight = arry.join(',');
                var id = arry2.join(',');
                var params={
                    weight:weight,
                    id:id
                };
                this.xgwt(params,disabledOne);
         }
         
      },
      // 表格list
      async list(){
             var params = {};
             var res = await pjgzList(params);
            if(res.code == 200){
                this.dataList = res.data;
                this.xrsj()
            }else{
                  this.$message(res.message);
            }
      },
      async xgwt(paramsList,disabledOne){
             var params = paramsList
             var res = await weightEdit(params);
            if(res.code == 200){
                this.$message(res.message);
                if(disabledOne == 1){
                    this.disabledOne = true
                }else if(disabledOne =2){
                    this.disabledTwo = true
                }else if(disabledOne =3){
                    this.disabledThree = true
                }else{
                     this.disabledFour = true
                }
                
            }else{
                this.$message(res.message);
            }
      },
      add(list){
        this.addForm.standard='',
        this.addForm.name='',
        this.addForm.initial=0,
        this.addForm.type='0',
        this.dialogVisible = true;
        this.listPd = false;
        this.kongList =  list;
        if(list == this.fourList){
            this.listPd = true
        }
      },
      submitForm(formName){
           this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addFunction()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      async addFunction(){
          if(this.listPd == false){
                var parent_id = this.kongList[0].fjMenu.parent_id
          }else{
              var parent_id = this.kongList[0].parent_id
          };
            var params={
             parent_id:parent_id,
             standard:this.addForm.standard,
             name:this.addForm.name,
             initial:this.addForm.initial,
             type:this.addForm.type,
          }
          console.log(params)
           var res = await addQuota(params);
           if(res.code == 200){
                this.dialogVisible = false;
                this.list();
           }
      },
       deleteif(id){
          this.dialogVisible2 = true;
          this.deleteId = id;
        },
        async deleteSure(){
            var params = {
                id:this.deleteId
            };
           var res = await delQuota(params);
           if(res.code == 200){
               this.$message('删除成功');
                this.dialogVisible2 = false;
                this.list()
           }else{
             this.$message(res.message);  
           }
        },
    

    },
    mounted(){
        this.list();
    }
}
</script>
<style lang="stylus" scoped>
    .page-pjdetail{
        .el-header{
            color:#79C6E4;
            line-height:60px;
        }
      .pjsz{
          border:1px solid #DDDDDD;
          border-radius:4px;
          overflow:hidden;
            .backfff{
                width:100%;
                background-color:#fff;
                .verticalAlign{
                 vertical-align:top;   
                }
                height:auto;
                .pjsz-main{
                    padding:10px;
                    height:100%;
                    border-right:1px solid #DDDDDD;
                    padding:20px; 
                    .static{
                        background-color:#f6f6f6;
                        position:relative;
                        .qzz{
                            color:#3181BB;
                         
                             background-color:rgba(221,221,221,0.4);
                        }
                        .xian{
                             position:absolute;
                        }
                    }    
                    >table{
                        width:100%;
                        margin-bottom:20px;
                        border-collapse:separate; 
                        border-spacing:0px 10px;
                        tr{
                            border-radius:20px;
                            margin-bottom:20px;
                            padding:20px;
                            .qzz{
                                border-top-left-radius:20px;
                                border-bottom-left-radius:20px;
                                p{
                                    padding:20px 0px;
                                    width:100%;
                                    height:100%;
                                    padding:20px 10px;
                                    display:block;
                                    .input-qzz{
                                        width:18px;
                                        height:30px;
                                    }
                                    
                                    .border-none{
                                        border:none;
                                        background-color:transparent;
                                        color:inherit
                                    }
                                    .activeiput{
                                       border:3px solid #ededed;
                                       background-color:#C7EDCC; 
                                       color:#333;
                                       width:40px;
                                       border-radius:5px
                                    }
                                    
                                } 
                            }
                            
                            .nameMain{
                                text-align:left;
                                padding-left:10px;
                                padding:20px;
                               
                                .margin-20{
                                     margin-bottom:20px;
                                     padding-right:20px;
                                     font-size:16px;
                                     fong-weight:bold;
                                }
                            }
                            .csfz{
                                span{
                                    display:inline-block;
                                    margin-right:10px;
                                    border-radius:4px;
                                }
                            }
                            .set{
                                border-top-right-radius:20px;
                                border-bottom-right-radius:20px;
                                position:relative;
                                width:20px;
                                
                                p{
                                    position:absolute;
                                }
                                .icon-set{
                                    top:5px;
                                    right:15px; 
                                    
                                }
                                .icon-delete1{
                                    bottom:5px;
                                    right:15px; 
                                }

                            }
                           
                        }
                        
                    }
                   
                    .backOrange{
                        background-color:#D8B640;
                        color:#fff;
                        .set{
                            .iconfont{
                            color:#fff;
                        }
                        }
                        
                    }

                }
                .oneji{
                      .active{
                          background-color:rgba(133,190,229,1);
                          color:#fff;
                          .qzz{
                                color:#fff;
                                background-color:#77ABCE;
                            }
                     }
                     .color{
                         color:rgba(133,190,229,1)
                     }
                     
                   
                }
                 .twoji{
                      .active{
                          background-color:#F6A8CC;
                          color:#fff;
                          .qzz{
                                color:#fff;
                                background-color:#DD97B7;
                            }
                     }
                      .color{
                         color:#F6A8CC
                     }
                     
                   
                }
                 .threeji{
                      .active{
                          background-color:#63D0EE;
                          color:#fff;
                          .qzz{
                                color:#fff;
                                background-color:#59BBD6;
                            }
                     }
                     .color{
                         color:#63D0EE
                     }
                     
                   
                }
                .fourji{
                   .static{
                       .qzz{
                          width:100px;
                       }
                      
                        .csfz{
                            span{
                                background-color:#DDDDDD;
                                padding:5px 10px;
                            }
                            
                        }
                    }
                    .color{
                         color:#D8B640
                     }
                    .active{
                        background-color:#D8B640;
                          color:#fff;
                          .qzz{
                                color:#fff;
                                background-color:#C2A339;
                            }
                            .csfz{
                            span{
                                background-color:#C2A339;
                            }
                            
                        }
                    }
                    
                }
            }
          
          .pjsz-title{
            li{
                text-align:left;
                padding:5px;
                color:#0076A3 
            }       
          } 
      }
    }
</style>




