<template>
    <div class="page page-bjgl">
        <el-container>
              <el-main>
                  <div class="selectButton over"  v-for="(item,index) in kxList" :key="index">
                      <div class="left kx-title" >{{item.name}}</div> 
                      <div class="left" id="clickEvent">
                            <el-button class="active">全部</el-button>
                            <el-button   v-for="(tem,key) in item.nr" :key="key" :bh="tem.bh">{{tem.name}}</el-button>
                      </div>
                  </div>
                 
                    <div>
                        <div class="over width100 zynr">
                            <div class="xi-contain">
                                <div>
                                    <div class="main-title border-bottom">高职</div>
                                    <div>
                                        <div class="main-title">会计3+2</div>
                                        <ul class="bzuren">
                                            <li>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td class="width200">111</td>
                                                            <td>111</td>
                                                            <td class="width200">
                                                                <el-button class="buttonback">增加</el-button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td class="width200">111</td>
                                                            <td>111</td>
                                                            <td class="width200">
                                                                <el-button class="buttonback">增加</el-button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div class="main-title border-bottom">高职</div>
                                    <div>
                                        <div class="main-title">会计3+2</div>
                                        <ul class="bzuren">
                                            <li>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td class="width200">111</td>
                                                            <td>
                                                                    <div class="selectbox">
                                                                        <el-input class="nianjixz" v-model="value" ></el-input>
                                                                        <el-select v-model="value" placeholder="请选择"  class="nianjixz">
                                                                            <el-option :label="label" :value="value"> 16-17</el-option>
                                                                            <el-option :label="label" :value="value">1111</el-option>
                                                                        </el-select>
                                                                        <div class="set">
                                                                            <i class="iconfont icon-set1"></i>
                                                                            <i class="iconfont icon-shanchu"></i>
                                                                        </div>
                                                                        <div>
                                                                            <i></i>
                                                                            <i></i>
                                                                        </div>
                                                                    </div>
                                                            </td>
                                                            <td class="width200">
                                                                <el-button class="buttonback"><i class="iconfont icon-jiashang"></i>增加</el-button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td class="width200">111</td>
                                                            <td>111</td>
                                                            <td class="width200">
                                                                <el-button class="buttonback"><i class="iconfont icon-jiashang"></i>增加</el-button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
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
        </el-container>
      
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dialogVisible:false,
                dialogVisible2:false,
                active:'',
                xh:0,
                key:0,
                value:'16-17',
                label:'',
                disabled:true,
                kxList:[
                    {
                        name:'科系',
                        nr:[
                           {
                             name:'科系1',
                             bh:'',   
                            },
                            {
                                name:'科系2',
                                bh:'',   
                            },
                            {
                                name:'科系3',
                                bh:'',   
                            } 
                        ]

                    },
                    {
                        name:'科系',
                        nr:[
                           {
                                name:'科系1',
                                bh:'',   
                            },
                            {
                                name:'科系2',
                                bh:'',   
                            },
                            {
                                name:'科系3',
                                bh:'',   
                            } 
                        ]

                    },
                    ],
                  
                }
            },
      
        methods:{
            addXj(){

            },
            deleteEvent(){

            },
            clickEvent(){
                $('#clickEvent>button').click(function(){
                    var index = $('#clickEvent>button').index(this);
                    $(this).addClass('active').siblings().removeClass('active')
                })
            },
            inputFocus(){
                $(this).addClass('addborder');
                alert(1)
            }
        },
        mounted(){
            this.clickEvent()
        }
    }
</script>
<style lang="stylus" scoped>
    .page-bjgl{

        .el-main{
            padding:20px 0px;
            .iconfont {
                display:inline-block;
                font-size:14px;
                padding-right:20px;
            }
            .selectButton{
                padding-left:20px;
                .kx-title{
                    padding:10px 5px;
                }
                .el-button{
                    background-color:#BCC3C7;
                    color:#fff;
                    padding:10px 5px;
                }
                .active{
                    background-color:#E67E22;
                    color:#fff
                }
               
            }
             .zynr{
                 padding:20px;
                 .xi-contain{
                     >div{
                         width:100%;
                         text-align:left;
                         .main-title{
                             line-height:40px;
                            
                         }
                         .border-bottom{
                             border-bottom:1px solid #999
                                 
                        }
                        .bzuren{
                            width:100%;
                            >li{
                                width:100%;
                                background-color:#F5F5F5;
                                padding:20px;
                                margin-bottom:10px;
                                table{
                                    width:100%;
                                    .width200{
                                        width:200px;
                                    }
                                    .selectbox{
                                        width:300px;
                                        border:1px solid #999;
                                        position:relative;
                                        .set{
                                            position:absolute;
                                            right:5px;
                                            top:5px;
                                            width:30px;
                                            .el-input{
                                                width:30px;
                                            }
                                            .el-select{
                                                width:100px;
                                            }
                                            .iconfont{
                                                font-size:20px;
                                            }
                                        }
                                    }
                                    
                                }
                            }
                        }
                     }
                 }

            }
        }
       
        
    }
    
</style>