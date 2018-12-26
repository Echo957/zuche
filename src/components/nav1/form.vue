<template>
  <div class="content">
    <div class="content-one">
      <span>工作台</span>
      <span>分析与报告</span>
    </div>
    <div class="content-two">
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="top">在这里你可以查看一些基本统计与分析报告</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="one">
            <div class="one-overight">
              <span style="color:#2ab4c0">{{indexObj.todayTotalMoney}}</span>
              <span class="one-right">
                <i class="icon-third-jinbi" style="font-size:30px;color:gray"></i>
              </span>
            </div>
            <p class="tody-color">今日总金额</p>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="6"
                :percentage="40"
                :show-text="false"
                status="success"
              ></el-progress>
            </div>
            <div class="one-bottom">
              <span>进度</span>
              <span class="one-right">40%</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="one">
            <div class="one-overight">
              <span style="color:#f4725a">{{indexObj.todayTotalAdvice}}</span>
              <span class="one-right">
                <i class="icon-third-dianzan" style="font-size:30px;color:gray"></i>
              </span>
            </div>
            <p class="tody-color">今日反馈意见</p>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="6"
                :percentage="40"
                :show-text="false"
                status="success"
              ></el-progress>
            </div>
            <div class="one-bottom">
              <span>进度</span>
              <span class="one-right">40%</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="one">
            <div class="one-overight">
              <span style="color:#639ed3">{{indexObj.todayTotalOrders}}</span>
              <span class="one-right">
                <i class="icon-third-caigou-xianxing" style="font-size:30px;color:gray"></i>
              </span>
            </div>
            <p class="tody-color">今日预约单</p>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="6"
                :percentage="40"
                :show-text="false"
                status="success"
              ></el-progress>
            </div>
            <div class="one-bottom">
              <span>进度</span>
              <span class="one-right">40%</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="one">
            <div class="one-overight">
              <span style="color:#8981b5">{{indexObj.todayNewUsers}}</span>
              <span class="one-right">
                <i class="icon-third-icon_zhanghao" style="font-size:30px;color:gray"></i>
              </span>
            </div>
            <p class="tody-color">今日用户</p>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="6"
                :percentage="40"
                :show-text="false"
                status="success"
              ></el-progress>
            </div>
            <div class="one-bottom">
              <span class="one-bottom">进度</span>
              <span class="one-right">40%</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="one" style="height:600px">
            <div
              style="overflow:hidden;border-bottom:1px solid #efefef;padding-bottom:10px;height:50px"
            >
              <span style="color:#5fb8b9;font-weight:bolder;line-height:50px">销售汇总</span>
              <span style="float:right;line-height:50px" >
                <el-button
                  :class="index == 0 ? 'ac' : ''"
                  size="small"
                  round
                  style="background:#acb5c3;color:white"
                  @click="chartsChange(0)"
                >今日</el-button>
                <el-button
                :class="index == 1 ? 'ac' : ''"
                  size="small"
                  round
                  style="background:#acb5c3;color:white"
                  @click="chartsChange(1)"
                >本周</el-button>
                <el-button
                :class="index == 2 ? 'ac' : ''"
                  size="small"
                  round
                  style="background:#acb5c3;color:white"
                  @click="chartsChange(2)"
                >本月</el-button>
              </span>
            </div>
            <div class="three">
              <el-row>
                <el-col :span="6">
                  <p>总营业额</p>
                  <p class="dataCount">{{indexObj.totalMoney}}</p>
                </el-col>
                <el-col :span="6">
                  <p>总预约单</p>
                  <p class="dataCount">{{indexObj.totalOrder}}</p>
                </el-col>
                <el-col :span="6">
                  <p>总反馈意见</p>
                  <p class="dataCount">{{indexObj.totalAdvice}}</p>
                </el-col>
                <el-col :span="6">
                  <p>总用户数</p>
                  <p class="dataCount">{{indexObj.totalUsers}}</p>
                </el-col>
              </el-row>
            </div>
            <div>
              <p class="center-infor">最近一周的预约情况</p>
            </div>
            <div id="myChart" style="width:100%;height:300px"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="one" style="height:600px">
            <div
              style="overflow:hidden;border-bottom:1px solid #efefef;padding-bottom:10px;height:50px"
            >
              <span style="color:#5fb8b9;font-weight:bolder;line-height:50px">最近一周会员统计</span>
              <span style="float:right;line-height:50px" @click="shuaxintrue">
                <el-button style="background:#5fb8b9;color:white">
                  <i class="el-icon-refresh"></i>刷新
                </el-button>
              </span>
            </div>
            <div class="three">
              <el-row>
                <el-col :span="12">
                  <div class="three-left">
                    <p>总</p>
                    <p>{{indexObj.totalUsers}}</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="three-right">
                    <p>新</p>
                    <p>{{indexObj.todayNewUsers}}</p>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="huiyuan-infor">
              <el-table :data="weeksObj" height="350" style="width: 100%">
                <el-table-column prop="userName" label="会员"></el-table-column>
                <el-table-column prop="licensePlate" label="车牌号" width="125"></el-table-column>
                <el-table-column prop="startTime" label="取车时间" width="180"></el-table-column>
                <el-table-column prop="endTime" label="还车时间" width="180"></el-table-column>
                <el-table-column prop="money" label="租金"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getform } from "@/api/api";
import { getformweeks } from "@/api/api";
export default {
  data() {
    return {
      index: 0,
      indexObj: {},
      tableObj: {},
      typeArray: [],
      dataArray: [],
      weeksObj: []
    };
  },
  methods: {
    shuaxin() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "总营业额"
        },
        tooltip: {},
        xAxis: {
          data: this.typeArray
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.dataArray
          }
        ]
      });
      setTimeout(() => {
        window.onresize = function() {
          myChart.resize();
        };
      }, 200);
    },
    chartsChange(a) {
      // console.log(a)
      this.index = a
      let time = [];
      let totle = [];
      let arr = this.tableObj[a].listData;
      for (let i = 0; i < arr.length; i++) {
        time.push(arr[i].time);
        totle.push(arr[i].total);
      }
      // if (a==="day") {
      //   l
      // }else if (a==="weeks") {
      //   let arr = this.tableObj[1].listData;
      //   for ( let i = 0; i<arr.length; i++){
      //     time.push(arr[i].time);
      //     totle.push(arr[i].total);
      //   }
      // }else{
      //   let arr = this.tableObj[2].listData;
      //   for ( let i = 0; i<arr.length; i++){
      //     time.push(arr[i].time);
      //     totle.push(arr[i].total);
      //   }

      // }
      this.typeArray = time;
      this.dataArray = totle;
      // console.log(this.typeArray , this.dataArray)
      this.shuaxin();
    },
    //weeks请求
    getWeeks() {
      getformweeks().then(res => {
        console.log(res);
        if (res.code == 1) {
          this.weeksObj = res.result.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    shuaxintrue() {
      this.getWeeks();
    }
  },
  mounted() {
    this.shuaxin();
    getform().then(res => {
      // console.log(res)
      if (res.code == 1) {
        this.indexObj = res.result.statisticalData;
        this.tableObj = res.result.orderList;
        this.chartsChange(0);
      } else {
        this.$message.error(res.msg);
      }
    });
    this.getWeeks();
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}

.el-row {
  margin-bottom: 20px;
}

.content {
  background-color: #f3f5f9;
  /* padding-left: 20px; */
  padding: 20px;
}

.top {
  background-color: #dbe8f8;
  height: 50px;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 0 0 10px #d0d1d4;
}

.content-one {
  padding-bottom: 20px;
}

.content-one span:nth-child(1) {
  font-size: 25px;
}
.one {
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 0 10px #d0d1d4;
}

.one-bottom {
  padding-top: 10px;
  color: #b9c3c9;
}

.one-overight span {
  font-size: 30px;
}

.one-right {
  float: right;
}

.tody-color {
  font-weight: bolder;
  color: #b9c3c9;
  padding-bottom: 25px;
}

.three {
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 10px;
}

.three-left {
  float: right;
  padding-right: 20px;
  border-right: 1px solid #efefef;
}

.three-right {
  float: left;
  padding-left: 20px;
}

.three-left p:nth-child(2),
.three-right p:nth-child(2),
.dataCount {
  font-size: 30px;
}

.center-infor {
  text-align: center;
  font-size: 20px;
}
.ac{
  background: #0b67cd!important;
}
</style>
