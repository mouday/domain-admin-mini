<template>
  <van-tabbar
    v-model="active_"
    @change="onChange"
  >
    <van-tabbar-item
      name="cert-list"
      icon="orders-o"
      >证书</van-tabbar-item
    >

    <van-tabbar-item
      name="domain-list"
      icon="notes-o"
      >域名</van-tabbar-item
    >

    <van-tabbar-item
      name="user-index"
      icon="user-o"
      >个人中心</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
// created at 2023-07-07
export default {
  name: 'Tabbar',

  props: {
    active: {
      type: String,
    },
  },

  components: {},

  data() {
    return {}
  },

  computed: {
    active_: {
      get() {
        return this.active
      },
      set(val) {
        // pass
      },
    },
  },

  methods: {
    async getData() {},

    onChange(name) {
      this.$navigater.push({ name })
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>

<style lang="less" scoped></style>
