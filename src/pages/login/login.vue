<template>
  <div
    class=""
    style="margin-top: 20px"
  >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// created at 2023-07-07
import { getToken, setToken } from '../../utils/token-util/index.js'
import { useUserStore } from '@/store/user-store.js'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'login',

  props: {},

  components: {},

  data() {
    return {
      username: '',
      password: '',
    }
  },

  computed: {},

  methods: {
    ...mapActions(useUserStore, {
      syncUserInfo: 'syncUserInfo',
    }),

    async getData() {},

    onSubmit(form) {
      this.confirmSubmit(form)
    },

    async confirmSubmit(form) {
      console.log(form)
      let params = {
        username: form.username,
        password: form.password,
      }

      const res = await this.$http.login(params)

      if (res.code == 0) {
        this.$msg.success('登录成功')
        setToken(res.data.token)
        this.syncUserInfo()
        
        uni.reLaunch({
          url: '/',
        })
      }
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped></style>
