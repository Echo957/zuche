<template>
  <div class="content">
    <!-- top -->
    <div class="content-one">
      <span>车辆信息管理</span>
      <span>汽车信息管理列表</span>
      <span class="one-right" @click="handleClick()">
        <el-button style="background:#3598dc;color:white;border-radius:4%" size="mini">
          <i class="el-icon-circle-plus-outline btn-font">新增汽车信息</i>
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
        <div class="shopManage">汽车信息管理</div>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%" height="600px">
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="picture" label="图片" width="190px">
            <template slot-scope="scope">
              <img class="imgsize" :src="scope.row.picture" alt>
            </template>
          </el-table-column>
          <el-table-column prop="licensePlate" label="牌照"></el-table-column>
          <el-table-column prop="structure" label="结构"></el-table-column>
          <el-table-column prop="displacement" label="排量"></el-table-column>
          <el-table-column prop="gear" label="档位"></el-table-column>
          <el-table-column prop="seats" label="人数"></el-table-column>
          <el-table-column prop="carType" label="车型">
            <template slot-scope="scope">{{scope.row.carType | typechange}}</template>
          </el-table-column>
          <el-table-column prop="depositPrice" label="押金"></el-table-column>
          <el-table-column prop="rentPrice" label="租金"></el-table-column>
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
      <el-dialog title="编辑汽车信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="图片：" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.picture" :src="form.picture" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="牌照" :label-width="formLabelWidth">
            <el-input v-model="form.licensePlate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="结构：" :label-width="formLabelWidth">
            <el-select v-model="form.structure" placeholder="请选车身结构">
              <el-option label="三厢" value="三厢"></el-option>
              <el-option label="两厢" value="两厢"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排量(如:1.5、1.6)：" :label-width="formLabelWidth">
            <el-input v-model="form.displacement" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="档位：" :label-width="formLabelWidth">
            <el-select v-model="form.gear" placeholder="请选车辆档位">
              <el-option label="自动" value="自动"></el-option>
              <el-option label="手动" value="手动"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="人数" :label-width="formLabelWidth">
            <el-input v-model="form.seats" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属门店" :label-width="formLabelWidth">
            <el-input v-model="form.subordinate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="车型" :label-width="formLabelWidth">
            <el-select v-model="form.carType" placeholder="请选车型">
              <el-option
                v-for="(item,index) in carType"
                :key="index"
                :label="item.type"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="押金" :label-width="formLabelWidth">
            <el-input v-model="form.depositPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="租金" :label-width="formLabelWidth">
            <el-input v-model="form.rentPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="基础服务费" :label-width="formLabelWidth">
            <el-input v-model="form.servicePrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="保险费用" :label-width="formLabelWidth">
            <el-input v-model="form.insurancePrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="其他费用" :label-width="formLabelWidth">
            <el-input v-model="form.otherPrice" autocomplete="off"></el-input>
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
import { getcarlist, getcartype, getcarNew } from "@/api/api";
let a = [];
export default {
  data() {
    return {
      input1: "",
      tableData: [],
      form: {},
      currentPage1: 5,
      dialogFormVisible: false,
      dialogFormAdd: false,
      formLabelWidth: "230px",
      imageUrl: "",
      carType: []
    };
  },
  filters: {
    typechange: function(value) {
      for (let index = 0; index < a.length; index++) {
        if (value == a[index].id) {
          return a[index].type;
        }
      }
    }
  },
  methods: {
    // 编辑按钮
    handleClick(row, index) {
      if (row) {
        this.form = JSON.parse(JSON.stringify(row));
        this.dialogFormVisible = true;
      } else {
        this.form = {};
        this.dialogFormVisible = true;
      }
    },
    // 修改数据
    dialogFormFalse() {
      // debugger
      this.dialogFormVisible = false;
      console.log(this.form)
      getcarNew(this.form).then(res=>{
        if (res.code == 1) {
          this.$message({
            message: res.result,
            type: "success"
          });
          this.getcarlist();
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 上传照片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getcarlist() {
      getcarlist().then(res => {
        console.log(res);
        if (res.code == 1) {
          this.tableData = res.result.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    getcartype() {
      getcartype().then(res => {
        if (res.code == 1) {
          a = res.result;
          this.carType = res.result;
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  },
  mounted() {
    this.getcarlist();
  },
  created() {
    this.getcartype();
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
}
.content-one {
  padding-bottom: 20px;
}

.content-one span:nth-child(1) {
  font-size: 25px;
}
.one-right {
  float: right;
}

.btn-font {
  font-size: 20px;
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

.avatar-uploader {
  border: 1px dashed black;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 180px;
}

.avatar-uploader:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.imgsize {
  width: 180px;
  height: 90px;
  display: block;
}
</style>
