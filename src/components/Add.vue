<template>
  <div>
    <h3>the count is : {{ this.$store.state.count }}</h3>
    <button @click="btnHandle">+1</button>
    <button @click="btnHandle2">+N</button>
    <button @click="btnHandle3">+1 Async</button>
    <button @click="btnHandle4">+N Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandle() {
      //   调用store中的commit方法，来调用store.js下mutation中声明的函数，commit中放函数名或者参数
      this.$store.commit('add')
    },
    btnHandle2() {
      //使用mutation传参
      this.$store.commit('addN', 3)
    },
    btnHandle3() {
      //vuex中处理异步函数
      //用dispatch调用action中定义的函数
      this.$store.dispatch('addAsync')
    },
    btnHandle4() {
      this.$store.dispatch('addNAsync', 3)
    },
  },
}
</script>
