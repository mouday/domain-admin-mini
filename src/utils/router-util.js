export const Router = {
  push({ name }) {
    uni.navigateTo({
      url: `/pages/${name}/${name}`,
    })
  },

  back() {
    uni.navigateBack()
  },
}
