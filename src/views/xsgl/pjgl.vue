<template>
    <div class="page pagexxgl">
        <el-form :inline="true" :model="form" class="demo-form-inline align-left padding20">
            <el-form-item label="">
                <el-select v-model="form.xj" placeholder="请输入学级">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
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
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="align-left padding-left-20 over">
            <div class="right search">
                <el-input class=""></el-input>
                <i class="iconfont icon-chaxun"></i>
            </div>
            
        </div>
        <div style="width:100%;padding-top:20px;">
            <el-table
            ref="multipleTable"
            :data="tableData"
            style="width: 100%"
            align="center"
             :row-class-name="tableRowClassName"
            @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="" >
                </el-table-column>
                 <el-table-column
                    label="学号"
                    prop="xh"
                    width="">
                </el-table-column>
                 <el-table-column
                    label="姓名"
                    prop="name"
                    width="">
                </el-table-column>
                 <el-table-column
                    label="班级"
                    prop="bj"
                    width="">
                </el-table-column>
                 <el-table-column
                    label="性别"
                    prop="xb"
                    width="">
                </el-table-column>
                 <el-table-column
                   label="出生日期"
                   prop="xb"
                    width="">
                </el-table-column>
                 <el-table-column
                   label="民族"
                   prop="xb"
                    width="">
                </el-table-column>
                 <el-table-column
                    label="身份证号"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="籍贯"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="联系电话"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="分数"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="家长姓名"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="家长电话"
                    prop="xb"
                    width="">
                </el-table-column>
                <el-table-column
                    label="操作"
                    prop="xb"
                    width="">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <!-- <el-button type="text" size="small">编辑</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                xj:'',
            },
            tableData:[
                {
                    xh:'12344',
                    name:'moumou',
                    bj:'二班',
                    xb:'女',
                },
                {
                    xh:'12344',
                    name:'moumou',
                    bj:'二班',
                    xb:'女',
                },{
                    xh:'12344',
                    name:'moumou',
                    bj:'二班',
                    xb:'女',
                },
                {
                    xh:'12344',
                    name:'moumou',
                    bj:'二班',
                    xb:'女',
                },{
                    xh:'12344',
                    name:'moumou',
                    bj:'二班',
                    xb:'女',
                }
            ]
        }
    },
    methods:{
        handleSelectionChange(){

        },
        onSubmit(){

        },
        handleClick(row){
            this.$router.push('./pjDetail')
        },
         tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        }
    },
    mounted(){

    }
}
</script>
<style lang="stylus" scoped>
    .pagexxgl{
        .search{
            width:200px;
            height:36px;
            position:relative;
            padding-right:10px;
            .iconfont{
                position:absolute;
                right:20px;
                top:10px;

            }
            // border:1px solid #999;
        }
    }
</style>