<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="~assets/img/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        :model="loginForm"
        label-width="80px"
        class="login_form"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            prefix-icon="iconfont icon-3702mima"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="loginClick" :plain="true">登录</el-button>
          <el-button type="info" @click="resetForm('loginFormRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginFormSub } from 'network/login'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm(formName) {
      //   this.$refs[formName].resetFields();
      this.$refs.loginFormRef.resetFields()
    },
    loginClick() {
      this.$refs.loginFormRef.validate(valid => {//表单验证是否成功，成功 valid 为true    失败 valid 为false
        //   console.log(valid)
        if (!valid) return

        loginFormSub(this.loginForm)
          .then(res => {
            console.log(res)
            if (res.data.meta.status !== 200) {
              this.$message({
                showClose: true,
                message: '登录失败',
                type: 'error'
              })
            } else {
              this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success'
              })
              // 1.将登录成功之后的token，保存到客户端的 sessionStotage 中
              //   1.1 项目中除了登录之外的其他API接口， 必须登录之后才能访问
              //   1.2 token 只应在当前网站打开期间生效， 所以将 token 保存在 sessionStotage 中
              window.sessionStorage.setItem('token', res.data.data.token)
              // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
              this.$router.push('/home')
            }
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
