<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar
      title="证书列表"
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
            :label="item.comment || '-'"
          >
            <template #value>
              <span :class="item.valueClass"
                >{{ item.real_time_expire_days }}天</span
              >
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </van-pull-refresh>

    <!-- 底部导航栏 -->
    <Tabbar active="cert-list"></Tabbar>

    <!-- 公共的底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import { getDayClassName } from '@/components/common.js'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Tabbar,
    Footer,
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
        const res = await this.$http.getDomainList(params)
        this.list = [...this.list, ...res.data.list].map((item) => {
          item.valueClass = getDayClassName(item.real_time_expire_days)
          return item
        })
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
