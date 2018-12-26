<template>
  <div class="content">
    <!-- top -->
    <div class="content-one">
      <span>用户等级</span>
      <span>用户等级管理列表</span>
      <span class="one-right" @click="handleClick()">
        <el-button style="background:#3598dc;color:white;border-radius:4%" size="mini">
          <i class="el-icon-circle-plus-outline btn-font">新增用户等级</i>
        </el-button>
      </span>
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
        <div class="shopManage">用户等级</div>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%" height="600px">
          <el-table-column prop="name" label="等级名称"></el-table-column>
          <el-table-column prop="count" label="积分"></el-table-column>
          <el-table-column prop="dengjizhi" label="等级值"></el-table-column>
          <el-table-column fixed="right" label="操作">
              <!-- 编辑点击 -->
            <template slot-scope="scope">
              <el-button
                style="box-shadow: 0 0 10px #d0d1d4"
                @click="handleClick(scope.row,scope.$index)"
                size="small"
              >
                <i class="el-icon-edit"></i>
              </el-button>
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
      <!-- 编辑详情 -->
      <el-dialog title="编辑用户等级" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="等级名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="积分：" :label-width="formLabelWidth">
            <el-input v-model="form.count" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="等级值" :label-width="formLabelWidth">
            <el-input v-model="form.dengjizhi" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormFalse">确 定</el-button>
        </div>
      </el-dialog>
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
          name: "VIP卡",
          count: 1000,
          dengjizhi: 4
        },
        {
          name: "普通卡",
          count: 0,
          dengjizhi: 0
        },
        {
          name: "VIP卡",
          count: 500,
          dengjizhi: 3
        },
        {
          name: "普通卡",
          count: 10,
          dengjizhi: 1
        }
      ],
      form: "",
      currentPage1: 5,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    // 编辑按钮
    handleClick(row, index) {   
      debugger 
      if (row) {
        this.form = JSON.parse(JSON.stringify(row));
        this.dialogFormVisible = true;
      }else {
        this.form = {};
        this.dialogFormVisible = true;
      }
    },
    // 修改数据
    dialogFormFalse() {
      this.dialogFormVisible = false;
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

