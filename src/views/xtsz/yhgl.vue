<template>
    <div class="page page-xjgl">
        <el-container>
             <el-main>
                    <div>
                        <div class="width100 align-left padding-left-20" >
                            <router-link to='yhgladd'><el-button type="primary"><i class="iconfont icon-jiashang"></i>增加</el-button></router-link>
                            <el-button  @click="dialogVisible = true"><i class="iconfont icon-shanchu"></i>删除选择项</el-button>
                        </div>
                        <div class="over width100 zynr">
                            <el-table  ref="multipleTable"
                                    :data="tableData"
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange"
                                    :row-class-name="tableRowClassName"
                                     :default-sort = "{prop: 'lastLogin', order: 'descending'}">
                                <el-table-column
                                type="selection"
                                    width="55" 
                                    sortable
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    label="姓名"
                                    prop="name" 
                                    sortable
                                    align="center">
                                </el-table-column>
                                 <el-table-column
                                    label="登录"
                                     sortable
                                     sort-by="{prop: 'login', order: 'descending'}"
                                    prop="login" align="center">
                                </el-table-column>
                                 <el-table-column
                                    label="角色"
                                    prop="js" 
                                    sort-by="{prop: 'login', order: 'descending'}"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    label="最后登录"
                                    sortable
                                    prop="lastLogin" align="center">
                                </el-table-column>
                            </el-table>
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
                tableData:[
                    {
                        name:'高静',
                        login:'1004',
                        js:'班主任',
                        lastLogin:'2018年3月5日下午1点40分'
                    },
                    {
                        name:'阿杰',
                        login:'1003',
                        js:'班主任',
                        lastLogin:'2018年3月5日下午1点40分'
                    },
                    {
                        name:'黄英',
                        login:'1005',
                        js:'班主任',
                        lastLogin:'2018年3月5日下午1点40分'
                    },
                    {
                        name:'李静',
                        login:'1004',
                        js:'班主任',
                        lastLogin:'2018年3月5日下午1点44分'
                    }
                ]
            }
        },
        methods:{
            addXj(){

            },
            deleteEvent(){

            },
            handleSelectionChange(){

            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                return 'warning-row';
                } else if (rowIndex === 3) {
                return 'success-row';
                }
                return '';
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .page-xjgl{
        .el-main{
            padding:20px 0px;
            .iconfont {
                display:inline-block;
                font-size:14px;
                padding-right:20px;
            }
             .zynr{
                 width:100%;
                 padding:20px;
               .el-tabel{
                   width:100%;
                     .warning-row {
                            background: oldlace;
                        }

                        .success-row {
                            background: #f0f9eb;
                        }
               } 
               
            }
        }
       
        
    }
    
</style>