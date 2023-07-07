<template>
  <view class="content"> 欢迎使用Domain Admin </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      loading: false,
    }
  },

  onLoad() {
    // this.getData()
  },

  methods: {
    async getData() {
      this.loading = true

      let params = {
        size: this.size,
        page: this.page,
      }

      try {
        const res = await this.$http.getDomainList(params)
        this.list = res.data.list
        this.total = res.data.total
      } catch (e) {
        console.log(e)
        // this.msg.error(e.msg);
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
