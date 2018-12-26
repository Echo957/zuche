<template>
  <div class="content">
    <p class="top">预约单：2018069665</p>
    <!-- 主干 -->
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <ul class="one-infor">
            <li>
              <img src="@/assets/taile.jpg">
            </li>
            <li>微微日</li>
            <li>13456732591</li>
            <li>
              <el-button type="success" round>更多订单</el-button>
            </li>
          </ul>
        </el-col>
        <el-col :span="8">
          <div class="two-infor">
            <p class="infor-top">预约详情</p>
            <div style="margin-top:15px">
              <img src="@/assets/taile.jpg" alt>
              <p>测试车型</p>
              <p>两厢|1.5自动|乘坐3人</p>
            </div>
            <el-row class="infor-two-center">
              <el-col :span="8">
                <div>
                  <p>取车时间</p>
                  <p style="font-weight: bolder;font-size: 30px">9:30</p>
                  <p>2018-06-10</p>
                  <p>周日</p>
                </div>
              </el-col>
              <el-col :span="8">
                <p class="datatwo">2天</p>
              </el-col>

              <el-col :span="8">
                <div>
                  <p>取车时间</p>
                  <p style="font-weight: bolder;font-size: 30px">9:30</p>
                  <p>2018-06-10</p>
                  <p>周日</p>
                </div>
              </el-col>
            </el-row>
           <el-row class="money-infor">
              <el-col :span="8">
                <span>取车门店</span>
              </el-col>
              <el-col :span="16" style="border-left: 1px solid #cac6c6"> 
                <span>汕尾店</span>
            </el-col> 
              </el-row>
            <el-row class="money-infor">
              <el-col :span="8">
                <span>还车门店</span>
              </el-col>
              <el-col :span="16" style="border-left: 1px solid #cac6c6"> 
                <span>汕尾店</span>
            </el-col> 
              </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="three-infor">
            <p class="infor-top">费用详情</p>
            <el-row class="money-infor">
              <el-col :span="12">
                <span>车辆租赁费及门店服务费</span>
              </el-col>
              <el-col :span="12" style="border-left: 1px solid #cac6c6"> 
                <span>￥0</span>
            </el-col> 
              </el-row>
              <el-row class="money-infor">
              <el-col :span="12">
                <span>基础服务费</span>
              </el-col>
              <el-col :span="12" style="border-left: 1px solid #cac6c6"> 
                <span>￥0</span>
            </el-col> 
              </el-row>
              <el-row class="money-infor">
              <el-col :span="12">
                <span>其他</span>
              </el-col>
              <el-col :span="12" style="border-left: 1px solid #cac6c6">  
                <span>￥0</span>
            </el-col> 
              </el-row>
              <el-row class="money-infor">
              <el-col :span="12">
                <span>费用合计</span>
              </el-col>
              <el-col :span="12" style="border-left: 1px solid #cac6c6"> 
                <span>￥0</span>
            </el-col> 
              </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding: 20px;
}
.one-infor {
  background-color: white;
  text-align: center;
  box-shadow: 0 0 25px #cac6c6;
}

.three-infor > li > img {
  border-radius: 50%;
}

ul > li {
  padding: 10px 0;
  list-style-type: none;
}

.top {
  margin-bottom: 20px;
}

.money-infor {
    border-top: 1px solid #cac6c6;
    border-bottom: 1px solid #cac6c6;
    padding: 10px 0;
}

.infor-top {
    color: #1787dd;
    font-size: 20px;
    padding: 10px 0;
    border-bottom: 1px solid #cac6c6;
}

.infor-two-center{
    border-top: 1px solid #cac6c6;
}

.infor-two-center p {
    padding: 5px 0;
}

.datatwo {
    line-height: 120px;
}
</style>
