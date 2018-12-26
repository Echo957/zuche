<template>
  <el-container>
    <el-header height="90px">
      <el-row>
        <el-col :span="20">
          <strong>后台管理系统</strong>
        </el-col>
        <el-col :span="4">
          <el-dropdown trigger="hover" class="UserName-info">
            <span>
              UserName
              <img src="@/assets/taile.jpg">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>
                <el-button type="text" @click="loginUp">退出登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          height="100%"
        >
          <!-- 首页 -->
          <router-link to="/form" class="router-link-active">
            <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>首页</span>
              </template>
            </el-menu-item>
          </router-link>
          <!-- 门店 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>门店</span>
            </template>
            <el-menu-item-group id="navgroup">
              <router-link class="router-link-active" to="/stores"><el-menu-item index="2-1"><i class="el-icon-goods"></i>门店管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 车辆 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>车辆</span>
            </template>
            <el-menu-item-group>
              <router-link class="router-link-active" to="/carInformations"><el-menu-item index="3-1"> <i class="el-icon-tickets"></i>汽车信息管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>订单</span>
            </template>
            <el-menu-item-group>
              <router-link class="router-link-active" to="/appointment"><el-menu-item index="4-1"><i class="el-icon-document"></i>预约管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <!-- 用户 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <router-link class="router-link-active" to="/userLevel"><el-menu-item index="5-1"><i class="el-icon-star-off"></i>用户等级</el-menu-item></router-link>
              <router-link class="router-link-active" to="/userinformations"><el-menu-item index="5-2"><i class="el-icon-tickets"></i>用户信息</el-menu-item></router-link>             
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主干 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    loginUp() {
      var _this = this;
      this.$confirm("确认退出登录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #0b67cd;
  color: white;
  line-height: 90px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  /* text-align: center; */
  line-height: 200px;
  position: absolute;
  top: 90px;
  left: 0;
  bottom: 0;
}

.el-menu {
  background-color: #d3dce6;
}
.el-main {
  background-color: #f3f5f9;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 90px;
  left: 200px;
  right: 0;
  bottom: 0;
}
.router-link-active {
  text-decoration: none;
}

.UserName-info {
  float: right;
  padding-right: 20px;
  color: white;
}

.UserName-info img {
  width: 60px;
  border-radius: 50%;
  margin-top: 15px;
}

#navgroup{
  padding: 0 !important
}
</style>
