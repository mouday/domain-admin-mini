<template>
  <view class="page">
    <!-- NavBar 导航栏 -->
    <van-nav-bar
      title="个人中心"
      fixed
      placeholder
      safe-area-inset-top
    />

    <div
      v-if="hasUserInfo"
      class="userinfo"
    >
      <van-image
        round
        width="60"
        height="60"
        src="static/user-avatar.gif"
      />

      <div class="userinfo__name">{{ userInfo.username }}</div>
    </div>

    <van-button
      style="margin-top: 300px"
      type="danger"
      block
      @click="handleLogout"
      >退出登录</van-button
    >

    <!-- 底部导航栏 -->
    <Tabbar active="user-index"></Tabbar>

    <!-- 公共的底部 -->
    <Footer></Footer>
  </view>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import { removeToken } from '../../utils/token-util/index.js'
import { useUserStore } from '@/store/user-store.js'
import { mapState, mapActions } from 'pinia'
import Footer from '@/components/Footer.vue'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'

export default {
  components: {
    Tabbar,
    Footer,
  },

  data() {
    return {
      title: 'Hello',
    }
  },
  computed: {
    ...mapState(useUserStore, {
      hasUserInfo: 'hasUserInfo',
      userInfo: 'userInfo',
      isAdmin: 'isAdmin',
      userRoles: 'userRoles',
    }),
  },
  onLoad() {},

  methods: {
    ...mapActions(useUserStore, {
      removeUserInfo: 'removeUserInfo',
    }),

    handleLogout() {
      showConfirmDialog({
        title: '确认退出？',
        showConfirmButton: true,
      })
        .then(() => {
          // on confirm
          this.confirmLogout()
        })
        .catch(() => {
          // on cancel
        })
    },

    confirmLogout() {
      removeToken()

      this.removeUserInfo()

      uni.reLaunch({
        url: '/pages/login/login',
      })
    },
  },
}
</script>

<style>
.page {
  padding: 20px;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo__name {
  font-size: 24px;
  margin-top: 20px;
}
</style>
