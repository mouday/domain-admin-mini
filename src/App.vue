<script>
import { getToken } from './utils/token-util/index.js'

export default {
  onLaunch: function () {
    console.log('App Launch')
  },

  onShow: function () {
    console.log('App Show')
    if (!getToken()) {
      uni.navigateTo({
        url: '/pages/login/login',
      })
    }
  },
  
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
