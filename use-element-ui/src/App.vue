<template>
  <div id="app">
    <el-container>
      <el-header>
        <h3>element-ui</h3>
      </el-header>
      <el-container>
        <el-aside width="200px">aside</el-aside>
        <el-main>
          <h6>Basic</h6>
          <el-row>
            <el-button>按钮</el-button>
            <el-button type="primary">按钮</el-button>
            <el-button type="success">按钮</el-button>
            <el-button type="warning">按钮</el-button>
            <el-button type="info">按钮</el-button>
            <el-button type="danger" disabled>按钮</el-button>
            <el-button type="text">按钮</el-button>
            <el-button
              type="primary"
              icon="el-icon-s-home"
              plain
              circle
              size="mini"
            ></el-button>
            <el-button type="primary" loading disabled>加载中</el-button>
          </el-row>
          <el-row>
            <el-link>链接</el-link>
            <el-link type="primary" href="#">链接</el-link>
            <el-link type="danger">链接</el-link>
            <el-link type="warning">链接</el-link>
            <el-link type="info">链接</el-link>
            <el-link type="success">链接</el-link>
            <el-link :underline="false" disabled>链接</el-link>
            <el-link type="primary" :underline="false" disabled>链接</el-link>
          </el-row>

          <h6>Form</h6>
          <el-row>
            radio
            <el-radio v-model="sex" label="0">男</el-radio>
            <el-radio v-model="sex" label="1">女</el-radio>
            <el-radio v-model="fruit" label="banana" border>香蕉</el-radio>
            <el-radio v-model="fruit" label="apple" border>苹果</el-radio>
            <el-radio-group v-model="animal" fill="#67C23A" size="mini">
              <el-radio-button label="dog">狗</el-radio-button>
              <el-radio-button label="cat">猫</el-radio-button>
              <el-radio-button label="pig">猪</el-radio-button>
            </el-radio-group>
          </el-row>
          <el-row type="flex">
            checkbox
            <el-checkbox v-model="scheme">同意协议</el-checkbox>
            <el-checkbox v-model="number" :label="1">1</el-checkbox>
            <el-checkbox v-model="number" :label="2">2</el-checkbox>
            <el-checkbox v-model="number" :label="4">4</el-checkbox>
            <el-checkbox-group :min="1" :max="3" v-model="scity">
              <el-checkbox
                :label="city"
                v-for="city in cities"
                :key="city"
                >{{ city }}</el-checkbox
              >
            </el-checkbox-group>
          </el-row>
          <el-row>
            <my-input></my-input>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyInput from './components/Input.vue'
export default {
  name: "App",
  data() {
    return {
      sex: "0",
      fruit: "banana",
      animal: "pig",
      scheme: true,
      number: [1, 2, 3],
      cities: ["北京", "上海", "杭州", "深圳"],
      scity: [],
    };
  },
  components: {
    MyInput
  }
};
</script>

<style>
.el-header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  text-align: center;
}
.el-aside {
  border-right: 2px solid #eee;
}

.el-row {
  margin-bottom: 10px;
}
</style>
