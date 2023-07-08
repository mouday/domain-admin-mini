<script>
import { getToken } from './utils/token-util/index.js'
import { useUserStore } from '@/store/user-store.js'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {},

  onLaunch: function () {
    console.log('App Launch')

    if (getToken()) {
      this.syncUserInfo()
    }
  },

  onShow: function () {
    console.log('App Show')
  },

  onHide: function () {
    console.log('App Hide')
  },

  methods: {
    ...mapActions(useUserStore, {
      syncUserInfo: 'syncUserInfo',
    }),
  },
}
</script>

<style>
/*每个页面公共css */
@import './style/index.css';
</style>
