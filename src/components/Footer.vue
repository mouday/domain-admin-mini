<template>
  <div class="footer"></div>
</template>

<script>
// created at 2023-07-08
import { getToken, setToken } from '../utils/token-util/index.js'

export default {
  name: 'Footer',

  props: {},

  components: {},

  data() {
    return {}
  },

  computed: {},

  methods: {
    getData() {
      if (!getToken()) {
        
        uni.reLaunch({
          url: '/pages/login/login',
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
