<template>
  <div id="home">
    <el-button type="info" @click="btnClick">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    btnClick() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
