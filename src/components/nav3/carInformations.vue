<template>
  <div class="content">
    <!-- top -->
    <div class="content-one">
      <span>车辆信息管理</span>
      <span>汽车信息管理列表</span>
      <span class="one-right" @click="dialogAdd()">
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
          <el-table-column prop="picture" label="图片"></el-table-column>
          <el-table-column prop="carname" label="汽车名称"></el-table-column>
          <el-table-column prop="jiegou" label="车身结构"></el-table-column>
          <el-table-column prop="pailiang" label="排量"></el-table-column>
          <el-table-column prop="dangwei" label="档位"></el-table-column>
          <el-table-column prop="count" label="排乘坐人数"></el-table-column>
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
          <el-form-item label="图片：" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="汽车名称：" :label-width="formLabelWidth">
            <el-input v-model="form.carname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="车身结构(如:两厢、三厢、SUV)：" :label-width="formLabelWidth">
            <el-input v-model="form.jiegou" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="排量(如:1.5、1.6)：" :label-width="formLabelWidth">
            <el-input v-model="form.pailiang" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="档位：" :label-width="formLabelWidth">
            <el-select v-model="form.dangwei" placeholder="请选车辆档位">
              <el-option label="自动" value="自动"></el-option>
              <el-option label="手动" value="手动"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="乘坐人数" :label-width="formLabelWidth">
            <el-input v-model="form.count" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormFalse">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 新增详情 -->
      <el-dialog title="编辑汽车信息" :visible.sync="dialogFormAdd">
        <el-form :model="form">
          <el-form-item label="图片：" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="汽车名称：" :label-width="formLabelWidth">
            <el-input v-model="form.carname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="车身结构(如:两厢、三厢、SUV)：" :label-width="formLabelWidth">
            <el-input v-model="form.jiegou" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="排量(如:1.5、1.6)：" :label-width="formLabelWidth">
            <el-input v-model="form.pailiang" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="档位：" :label-width="formLabelWidth">
            <el-select v-model="form.dangwei" placeholder="请选车辆档位">
              <el-option label="自动" value="自动"></el-option>
              <el-option label="手动" value="手动"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="乘坐人数" :label-width="formLabelWidth">
            <el-input v-model="form.count" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormAdd = false">取 消</el-button>
          <el-button type="primary" @click="dialogAddFalse()">确 定</el-button>
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
          picture: "1",
          carname: "奔驰",
          jiegou: "三厢",
          pailiang: "1.6",
          dangwei: "自动",
          count: 5,
          shop: "汕尾城区店"
        },
        {
          picture: "2",
          carname: "宝马",
          jiegou: "三厢",
          pailiang: "1.8",
          dangwei: "自动",
          count: 4
        },
        {
          picture: "3",
          carname: "大众",
          jiegou: "三厢",
          pailiang: "1.5",
          dangwei: "自动",
          count: 5
        },
        {
          picture: "4",
          carname: "丰田",
          jiegou: "三厢",
          pailiang: "1.7",
          dangwei: "自动",
          count: 4
        }
      ],
      form: "",
      currentPage1: 5,
      dialogFormVisible: false,
      dialogFormAdd: false,
      formLabelWidth: "230px",
      imageUrl: "",
      indexone: null
    };
  },
  methods: {
    // 编辑按钮
    handleClick(row, index) {
      this.dialogFormVisible = true;
      this.form = JSON.parse(JSON.stringify(row));
      this.indexone = index;
    },
    // 修改数据
    dialogFormFalse() {
      this.dialogFormVisible = false;
      this.$set(this.tableData, this.indexone, this.form);
    },
    // 新增按钮
    dialogAdd() {
      this.dialogFormAdd = true;
      this.form = {};
    },
    // 增加数据
    dialogAddFalse(){
      this.dialogFormAdd = false;
      this.tableData.push(this.form)
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
    }
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
</style>
