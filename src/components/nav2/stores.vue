<template>
  <div class="content">
    <!-- top -->
    <div class="content-one">
      <span>门店管理</span>
      <span>门店管理列表</span>
      <span class="one-right" @click="handleClick()">
        <el-button style="background:#3598dc;color:white;border-radius:4%" size="mini">
          <i class="el-icon-circle-plus-outline btn-font">新增门店</i>
        </el-button>
      </span>
      <!-- <span class="one-right" @click="shuaxintrue()">
        <el-button
          style="background:#3598dc;color:white;margin-right:20px;border-radius:4%"
          size="mini"
        >
          <i class="el-icon-refresh btn-font">刷新</i>
        </el-button>
      </span>-->
    </div>
    <!-- 主干部分 -->
    <div class="content-two">
      <!-- 搜索 -->
      <!-- <div>
        <el-input placeholder="搜索..." v-model="input1">
          <el-button slot="append" icon="el-icon-search" @click="souSuo()"></el-button>
        </el-input>
      </div>-->
      <!-- 列表 -->
      <div class="content-three">
        <div class="shopManage">门店管理</div>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%" height="600px">
          <el-table-column prop="storeName" label="名字"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="businessHours" label="营业时间"></el-table-column>
          <el-table-column prop="status" label="门店状态">
            <template slot-scope="scope">{{scope.row.status == 'N' ? '通过' : '拒绝'}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <!-- 编辑点击 -->
            <template slot-scope="scope">
              <el-button
                style="box-shadow: 0 0 10px #d0d1d4"
                @click="handleClick(scope.row,scope.$index)"
                size="small"
              >
                <i class="el-icon-edit"></i>
              </el-button>
              <el-button
                style="box-shadow: 0 0 10px #d0d1d4"
                size="small"
                @click="deletes(scope.row,scope.$index)"
              >
                <i class="el-icon-delete"></i>
              </el-button>
              <el-button
                style="box-shadow: 0 0 10px #d0d1d4"
                size="small"
                @click="changes(scope.row,scope.$index)"
              >
                <i class="el-icon-sort"></i>
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
          :total="total"
          class="one-right"
        ></el-pagination>
      </div>
      <!-- 编辑详情 -->
      <el-dialog title="编辑门店" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="门店名称：" :label-width="formLabelWidth">
            <el-input v-model="form.storeName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="门店电话：" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="门店地址：" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off" readonly @focus="inforMap"></el-input>
          </el-form-item>
          <el-form-item label="门店大图：" :label-width="formLabelWidth">
            <el-input v-model="form.headerImage" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="门店小图：" :label-width="formLabelWidth">
            <el-input v-model="form.pic" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="营业时间：" :label-width="formLabelWidth">
            <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00'
              }"
            ></el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '00:00',
                step: '00:15',
                end: '24:00',
                minTime: startTime
              }"
            ></el-time-select>
          </el-form-item>
          <el-form-item label="门店介绍：" :label-width="formLabelWidth">
            <el-input v-model="form.introduce" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="门店经度：" :label-width="formLabelWidth">
            <el-input v-model="form.longitude" autocomplete="off" readonly></el-input>
          </el-form-item>
          <el-form-item label="门店纬度：" :label-width="formLabelWidth">
            <el-input v-model="form.latitude" autocomplete="off" readonly></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormFalse">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog class="mapTankuang" title="门店地址" :visible.sync="dialogMap" width="60%">
      <mapinfor @map-confirm="getaddress" @cancel="mapQuxiao"></mapinfor>
    </el-dialog>
  </div>
</template>

<script>
import { getstores, getstorelist, getstorestate } from "@/api/api";
import mapinfor from "@/components/public/map";
export default {
  data() {
    return {
      input1: "",
      total: 10,
      tableData: [],
      form: "",
      currentPage1: 5,
      dialogFormVisible: false,
      dialogMap: false,
      formLabelWidth: "120px",
      page: 1,
      startTime: "",
      endTime: "",
      time1: ""
    };
  },
  components: {
    mapinfor
  },
  methods: {
    getaddress(e) {
      // console.log(e);
      if (e.list) {
        this.form.address = e.address;
        this.form.longitude = e.lng;
        this.form.latitude = e.lat;
        this.dialogMap = false;
      } else{
        this.dialogMap = false;
      } 
    },
    //地图事件隐藏
    mapQuxiao() {
      this.dialogMap = false;
    },
    inforMap() {
      this.dialogMap = true;
    },
    // 编辑/新增按钮
    handleClick(row, index) {
      if (row) {
        this.form = JSON.parse(JSON.stringify(row));
        this.time1 = this.form.businessHours.split("-");
        this.startTime = this.time1[0];
        this.endTime = this.time1[1];
        // console.log(this.time1);
        this.dialogFormVisible = true;
      } else {
        this.form = {};
        this.dialogFormVisible = true;
      }
    },
    // 删除门店按钮
    deletes(row, index) {
      getstorestate({
        sid: row.sid,
        status: "D"
      }).then(res => {
        // console.log(res);
        if (res.code == 1) {
          this.$message({
            message: res.result,
            type: "success"
          });
          this.getstorelist();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    // 修改门店状态
    changes(row, index) {
      getstorestate({
        sid: row.sid,
        status: row.status == "N" ? "P" : "N"
      }).then(res => {
        console.log(res);
        if (res.code == 1) {
          this.$message({
            message: res.result,
            type: "success"
          });
          this.getstorelist();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    // 修改数据
    dialogFormFalse() {
      this.dialogFormVisible = false;
      this.form.businessHours = this.startTime + "-" + this.endTime;
      // console.log(this.form);
      getstores(this.form).then(res => {
        // console.log(res);
        if (res.code == 1) {
          this.$message({
            message: res.result,
            type: "success"
          });
          this.getstorelist();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getstorelist();
    },
    getstorelist() {
      getstorelist(this.page).then(res => {
        // console.log(res);
        if (res.code == 1) {
          this.tableData = res.result.data;
          this.total = res.result.totalSize;
        }else {
          this.$message.error(res.msg);
        }
      });
    }
  },
  mounted() {
    this.getstorelist();
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

