<template>
  <div class="content">
    <!-- top -->
    <div class="content-one">
      <span>用户信息</span>
      <span>用户信息管理列表</span>
      <span class="one-right">
        <el-button
          style="background:#3598dc;color:white;margin-right:20px;border-radius:4%"
          size="mini"
        >
          <i class="el-icon-refresh btn-font">刷新</i>
        </el-button>
      </span>
    </div>
    <!-- 主干部分 -->
    <div class="content-two">
      <!-- 搜索 -->
      <div>
        <el-input placeholder="搜索..." v-model="input1">
          <el-button slot="append" icon="el-icon-search" @click="souSuo()"></el-button>
        </el-input>
      </div>
      <!-- 列表 -->
      <div class="content-three">
        <div class="shopManage">用户信息</div>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%" height="600px">
          <el-table-column prop="name" label="昵称"></el-table-column>
          <el-table-column prop="zip" label="等级名称"></el-table-column>
          <el-table-column prop="address" label="性别"></el-table-column>
          <el-table-column prop="city" label="头像"></el-table-column>
          <el-table-column prop="state" label="注册时间"></el-table-column>
          <el-table-column prop="state" label="注册IP"></el-table-column>
          <el-table-column prop="state" label="上次登录时间"></el-table-column>
          <el-table-column prop="state" label="最后登录IP"></el-table-column>
          <el-table-column prop="state" label="手机号码"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <!-- 编辑点击 -->
            <template slot-scope="scope">
             
              <el-button style="box-shadow: 0 0 10px #d0d1d4" size="small">
                <i class="el-icon-delete"></i>
              </el-button>
             
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="overflow:hidden;padding-top:20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000"
          class="one-right"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: "待确认"
        },
        {
          date: "2016-05-02",
          name: "王虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      form: "",
      currentPage1: 5,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogFormVisible = true;
      this.form = row;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style>
.content {
  padding: 20px;
}
.content-one {
  padding-bottom: 20px;
}

.content-one span:nth-child(1) {
  font-size: 25px;
}
</style>

<style scoped>
.one-right {
  float: right;
}

.btn-font {
  font-size: 20px;
}

.content-two {
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px #d0d1d4;
}

.shopManage {
  background-color: #0b67cd;
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  padding-left: 20px;
  margin-top: 20px;
}
</style>

