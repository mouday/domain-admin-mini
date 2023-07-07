<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar
      title="域名列表"
      fixed
      placeholder
      safe-area-inset-top
    />

    <!-- list -->
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        offset="50"
        finished-text="没有更多了"
        @load="getData"
      >
        <van-cell-group inset>
          <van-cell
            v-for="item in list"
            :key="item"
            size="large"
            center
            :title="item.domain"
            :value="`${item.real_domain_expire_days} 天`"
            :label="item.comment || '-'"
          />
        </van-cell-group>
      </van-list>
    </van-pull-refresh>

    <!-- 底部导航栏 -->
    <Tabbar active="domain-list"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'

export default {
  components: {
    Tabbar,
  },

  data() {
    return {
      refreshing: false,
      loading: true,
      title: 'Hello',
      size: 10,
      page: 0,
      list: [],
      total: 0,
    }
  },

  computed: {
    finished() {
      return this.list.length >= this.total
    },
  },

  onLoad() {},

  created() {
    this.getData()
  },

  methods: {
    onRefresh() {
      console.log('onRefresh')
      this.resetData()
    },

    resetData() {
      console.log('resetData')
      this.page = 0
      this.list = []
      this.getData()
    },

    async getData() {
      console.log('getData')

      this.page++

      this.loading = true

      let params = {
        size: this.size,
        page: this.page,
      }

      try {
        const res = await this.$http.getDomainInfoList(params)
        this.list = [...this.list, ...res.data.list]
        this.total = res.data.total
      } catch (e) {
        console.log(e)
        // this.msg.error(e.msg);
      } finally {
        this.loading = false
        this.refreshing = false
      }
    },
  },
}
</script>

<style></style>
