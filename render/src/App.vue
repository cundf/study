<template>
  <div id="app">
    <custom-input v-model="value"></custom-input>

    <router-link to="/home"  tag="li" disabled  >首页</router-link>
    <router-link :to="{path: '/about'}" tag="button" append>关于</router-link>
    <router-link to="/profile" tag="aside" append>我的</router-link>
    <router-link :to="{name: 'user', params:{id: 123}}" tag="span">用户</router-link>
    <router-link :to="{path: '/profile', query: {id: 123, auth: true}}" custom v-slot="{href, navigate, isActive, isExactActive }" replace exact>
      <a :href="href" @click="navigate" :class="[isActive && 'router-link-active']">
        {{href}} <br>
        {{navigate}} <br>
        {{ isActive }} <br>
        {{ isExactActive}}
      </a>
    </router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: '',
    };
  },
  components: {
    "custom-input": {
      props: ['value'],
      render: function (h) {
        var self = this;
        return h("input", {
          // class: 'shape border color',
          // class: {
          //   shape: false,
          //   border: true,
          //   color: true
          // },
          class: ['shape',{border:false, color: true}],

          // style: 'border: 1px solid red; width: 100px',
          style: {
            width: '100px',
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%)'
          }, 
          attrs: {
            id: 'custom-input',
            placeholder: '我是自定义组件'
          },
          props: {  // 组件property
          },
          domProps: { // Dom property
            value: self.value
          },

          on: {
            input: function (event) {
              self.$emit('input', event.target.value)
            }
          },
          
          directives: { // 自定义指令

          },
          scopedSlots: { // 作用域插槽

          },
          slot: 'name-of-slot', // 组件是其他组件的子组件需为插槽指定名称
          key: '',
          ref: '',
          refInFor: true
        });
      },
    },
  },
  methods: {
    changeValue() {
      let arr = ['1','2','3']
      this.value = arr[parseInt(Math.random()*3)]
    }
  }
};
</script>

<style>
  .shape {
    width: 50px;
    height: 20px;
  }
  .color {
    background-color: pink
  }
  .border {
    border: 1px solid red;
    border-radius: 5px
  }

  .router-link-active {
    color: red
  }
</style>
