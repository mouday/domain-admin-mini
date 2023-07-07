/**
 * 消息提示，和PC端API对齐
 */
class SingleMessage {
  static message(options) {
    uni.hideToast()

    return uni.showToast(options)
  }

  static success(title) {
    return this.message({
      title,
      icon: 'success',
      // duration: 0
    })
  }

  static warning(title) {
    return this.message({
      title,
      type: 'success',
    })
  }

  static info(title) {
    return this.message({
      title,
      icon: 'error',
    })
  }

  static error(title) {
    return this.message({
      title,
      icon: 'error',
    })
  }

  static closeAll() {
    Message.closeAll()
  }
}

export default SingleMessage
