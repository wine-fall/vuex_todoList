<template>
  <div>
    <h3>the count is : {{ count }}</h3>
    <button @click="btnHandle">-1</button>
    <button @click="btnHandle1">-N</button>
    <button @click="btnHandle2">-1 Async</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    //mapState是一个vuex的函数，其中的参数是数组，全局变量以字符串的形式存在数组中
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync']),
    btnHandle() {
      this.sub()
    },
    btnHandle1() {
      this.subN(3)
    },
    btnHandle2() {
      this.subAsync()
    },
  },
}
</script>
