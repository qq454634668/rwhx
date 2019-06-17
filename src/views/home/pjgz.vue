<template>
    <div class="page page-pjsz">
      <el-container>
        <el-main style="padding-left:0px">
            <div class="pjsz">
                <table class="backfff"   v-loading="fullscreenLoading">
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
                                            <td class="qzz">
                                                <p>
                                                    <span> 权重<br/>
                                                    <input type="text" v-model="item.fjMenu.weight" class="input-qzz border-none" :disabled="disabledOne" v-bind:class="{ activeiput: disabledOne == false }"/>%
                                                    </span>
                                                </p>
                                            </td>
                                            <td class="nameMain">
                                                <p>
                                                    <span>{{item.fjMenu.name}}</span><br/>
                                                    <span>{{item.fjMenu.standard}}</span>
                                                </p> 
                                            </td>
                                            <td class="set">
                                                <p class="iconfont icon-set" @click="set(item.fjMenu,1)"> </p>
                                                <p class="iconfont icon-delete1" @click="deleteif(item.fjMenu.id)"></p> 
                                            </td>
                                        </tr>
                                        <tr class ="static oneji">
                                            <td class="qzz">
                                                <p class="cursor">
                                                    <span @click="disabledOne = false" v-show="disabledOne ==true">权重设置</span>
                                                    <span @click="editWeight(oneList,1)" v-show="!disabledOne">保存设置</span>
                                                </p>
                                            </td>
                                            <td :data="idList"><span class="color" @click="add(oneList,idList.oneId)"> 新增一级指标</span></td>
                                            <td class="set"></td>
                                        </tr>
                                </table>
                            </td>
                            <td class="pjsz-main twoji" style="width:20%;">
                                  <table>
                                    <tr v-for="(item,index) in twoList" :key="index" @click="twoClick(item.fjMenu.id,index)" class="static" v-bind:class="{ active: index == twoId }">
                                        <td class="qzz">
                                            <p>
                                                <span> 权重<br/>
                                                  <input type="text" v-model="item.fjMenu.weight" class="input-qzz border-none" :disabled="disabledTwo" v-bind:class="{ activeiput: disabledTwo == false }"/>%
                                                </span>
                                            </p>
                                        </td>
                                        <td class="nameMain">
                                            <p>
                                                <span>{{item.fjMenu.name}}</span><br/>
                                                <span>{{item.fjMenu.standard}}</span>
                                            </p> 
                                        </td>
                                        <td class="set">
                                            <p class="iconfont icon-set" @click="set(item.fjMenu,2)"> </p>
                                            <p class="iconfont icon-delete1" @click="deleteif(item.fjMenu.id)"></p>
                                        </td>
                                    </tr>
                                    <tr class ="static twoji">
                                        <td class="qzz">
                                             <p class="cursor">
                                                    <span @click="disabledTwo = false" v-show="disabledTwo ==true">权重设置</span>
                                                    <span @click="editWeight(twoList,2)" v-show="!disabledTwo">保存设置</span>
                                            </p>
                                        </td>
                                        <td :data="idList"><span class="color" @click="add(twoList,idList.twoId)"> 新增二级指标</span></td>
                                    </tr>
                                </table>
                            </td> 
                            <td class="pjsz-main threeji" style="width:20%;" >
                                 <table>
                                    <tr class ="static" v-for="(item,index) in threeList" :key="index" @click="threeClick(item.fjMenu.id,index)" v-bind:class="{ active: index == threeId }">
                                        <td class="qzz">
                                            <p>
                                                <span> 权重<br/>
                                                     <input type="text" v-model="item.fjMenu.weight" class="input-qzz border-none" :disabled="disabledThree" v-bind:class="{ activeiput: disabledThree == false }"/>%
                                                </span>
                                            </p>
                                        </td>
                                        <td class="nameMain">
                                            <p>
                                                <span>{{item.fjMenu.name}}</span><br/>
                                                <span>{{item.fjMenu.standard}}</span>
                                            </p> 
                                        </td>
                                        <td class="set">
                                            <p class="iconfont icon-set" @click="set(item.fjMenu,1)"> </p>
                                            <p class="iconfont icon-delete1" @click="deleteif(item.fjMenu.id)"></p>
                                        </td>
                                        
                                    </tr>
                                     <tr class ="static threeji">
                                        <td class="qzz">
                                            <p class="cursor">
                                                    <span @click="disabledThree = false" v-show="disabledThree ==true">权重设置</span>
                                                    <span @click="editWeight(threeList,3)" v-show="!disabledThree">保存设置</span>
                                            </p>
                                        </td>
                                        <td class="color" :data="idList"><span @click="add(threeList,idList.threeId)"> 新增三级指标</span></td>
                                        <td class="set"></td>
                                    </tr>
                                </table>
                            </td>
                            <td class="pjsz-main fourji" style="width:40%;">
                                 <table>
                                    <tr class ="static" v-for="(item,index) in fourList" :key="index" @click="fourClick(item.id,index)" v-bind:class="{ active: index == fourId }">
                                        <td class="qzz">
                                            <p>
                                                <span>权重<br/>
                                               <input type="text" v-model="item.weight" class="input-qzz border-none" :disabled="disabledFour" v-bind:class="{ activeiput: disabledFour == false }"/>%</span>
                                            </p>
                                        </td>
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
                                            <p class="iconfont icon-set"  @click="set(item,4)"> </p>
                                            <p class="iconfont icon-delete1" @click="deleteif(item.id)"></p>
                                        </td>
                                    </tr>
                                    <tr class ="static fourji">
                                            <td class="qzz">
                                               <p class="cursor">
                                                    <span @click="disabledFour = false" v-show="disabledFour ==true">权重设置</span>
                                                    <span @click="editWeight(fourList,4)" v-show="!disabledFour">保存设置</span>
                                            </p>
                                            </td>
                                            <td class="color" :data="idList"><span @click="add(fourList,idList.fourId)"> 新增评分项</span></td>
                                            <td class="set"></td>
                                        </tr>
                                </table>
                            </td>
                        </tr>
                        <el-dialog
                            title=""
                            :visible.sync="dialogVisible"
                            width="30%" class="align-left">
                                <el-form :label-position="labelPosition" :model="addForm" :rules="rules" ref="addForm">
                                    <el-form-item label="指标" prop="name">
                                        <el-input v-model="addForm.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="参考分值" prop="standard">
                                        <el-input v-model="addForm.standard"></el-input>
                                    </el-form-item>
                                    <el-form-item label="初始分值" v-show="listPd == true" prop="initial">
                                        <el-input v-model="addForm.initial"></el-input>
                                    </el-form-item>
                                    <el-form-item label="评分方式" v-show="listPd == true" prop="type">
                                         <el-select v-model="addForm.type" placeholder="请选择评分方式">
                                            <el-option label="加分" value="0" ></el-option>
                                            <el-option label="减分" value="1"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                            <span slot="footer" class="dialog-footer">
                                <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
                                <el-button type="primary" @click="submitForm('addForm')" v-if="edit == false">保存</el-button>
                                 <el-button type="primary" @click="submitFormedit('addForm') " v-show="edit == true">保存</el-button>
                            </span>
                        </el-dialog>
                        <el-dialog
                            title="删除"
                            :visible.sync="dialogVisible2"
                            width="30%">
                            <span>您确定要删除这个指标</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible2 = false">取 消</el-button>
                                <el-button type="primary" @click="deleteSure()">确 定</el-button>
                            </span>
                        </el-dialog>
                    </tbody>
                </table>
              
            </div>
           
        </el-main>
      </el-container>
    </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  import { pjgzList,weightEdit,addQuota,delQuota,editQuota} from '@/api';
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
        edit:false,
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
            id:'',
            parent_id:'',
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
        fullscreenLoading:false,
       idList:{
           oneId:0,
           twoId:'',
           threeId:'',
           fourId:'',
       }
      }  
    },
    methods:{
      oneClick(id,index){
          this.oneid = index;
          this.threeId = 0;
          this.fourId = 0;
          this.twoId = 0;
          this.xrsj();
          this.idList.twoId = id;
          
      },
      twoClick(id,index){
            this.twoId = index;
            this.threeId = 0;
            this.fourId = 0;
            this.xrsj();
             this.idList.threeId = id;
      },
      threeClick(id,index){
          this.threeId = index;
            this.fourId = 0;
          this.xrsj();
          this.idList.fourId = id;
      },
      fourClick(id,index){
            this.fourId = index;
          this.xrsj()
      },
      xrsj(){
             this.oneList = this.dataList;
             this.twoList = this.oneList[this.oneid].zjMenu;
             this.idList.twoId=this.oneList[0].fjMenu.id;
          if( this.twoList.length == 0){
                this.twoList = []; 
                this.threeList = [];
                this.fourList=[];
                this.idList.threeId='';
                this.idList.fourId='';
          }else{
               this.threeList = this.twoList[this.twoId].zjMenu;
               this.idList.threeId = this.oneList[this.oneid].zjMenu[0].fjMenu.id;
               if(this.threeList.length==0){
                   this.fourList=[];
                   this.idList.fourId='';
               }else{
                   this.idList.fourId = this.twoList[this.twoId].zjMenu[0].fjMenu.id;
                   this.fourList = this.threeList[this.threeId].zjMenu;
               }
          }
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
             this.fullscreenLoading = true;
             var res = await pjgzList(params);
            if(res.code == 200){
                this.dataList = res.data;
                this.xrsj();
                this.fullscreenLoading = false
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
                }else if(disabledOne ==2){
                    this.disabledTwo = true
                }else if(disabledOne ==3){
                    this.disabledThree = true
                }else if(disabledOne == 4){
                     this.disabledFour = true
                }
                
            }else{
                this.$message(res.message);
            }
      },
      add(list,id){
        this.dialogVisible = true;
        this.listPd = false;
        this.edit = false;
        this.kongList =  list;
        this.addForm.id= id;
        if(list == this.fourList){
            this.listPd = true
        }
      },
      set(item,num){
        this.dialogVisible = true;
        this.listPd = false;
        // this.kongList =  item;
        this.addForm.name =item.name;
        this.addForm.standard =item.standard;  
        this.addForm.id = item.id;  
        this.edit = true;
        if(num == '4'){
            this.listPd = true;
            this.addForm.initial = item.initial;
            this.addForm.type = item.type
        }
      },
      submitForm(formName){
           this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addFunction()
          } else {
            return false;
          }
        });
      },
      submitFormedit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.editFunction()
          } else {
            return false;
          }
        });
      },

      async addFunction(id){
        //   if(this.listPd == false){
        //         var parent_id = this.kongList[0].fjMenu.parent_id
        //   }else{
        //       var parent_id = this.kongList[0].parent_id
        //   };
            var params={
             parent_id:this.addForm.id,
             standard:this.addForm.standard,
             name:this.addForm.name,
             initial:this.addForm.initial,
             type:this.addForm.type,
          }
           var res = await addQuota(params);
           if(res.code == 200){
                this.dialogVisible = false;
                this.addForm.standard='',
                this.addForm.name='',
                this.addForm.initial=0,
                this.addForm.type='0',
                this.list();
           }
      },
      async editFunction(){
            var params={
             standard:this.addForm.standard,
             name:this.addForm.name,
             initial:this.addForm.initial,
             type:this.addForm.type,
             id:this.addForm.id,
          }
           var res = await editQuota(params);
           if(res.code == 200){
                this.dialogVisible = false;
                this.addForm.standard='',
                this.addForm.name='',
                this.addForm.initial=0,
                this.addForm.type='0',
                 this.addForm.id='',
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
    .page-pjsz{
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
                .pjsz-title{
                    td{
                        color:#0478A4;
                        line-height:40px;
                       border-bottom:1px solid #E5E5E5;  
                    }
                   
                }
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
                         
                             background-color:#DDDDDD;
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
                                    color:#C5C5C5; 
                                    
                                }
                                .icon-delete1{
                                    bottom:5px;
                                    right:15px; 
                                    color:#C5C5C5; 
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
          
        //   .pjsz-title{
        //     li{
        //         text-align:left;
        //         padding:5px;
        //         color:#0076A3 
        //     }       
        //   } 
      }
    }
</style>




