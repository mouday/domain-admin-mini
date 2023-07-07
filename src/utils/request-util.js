export function asyncRequest(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: options.url,
      method: options.method,
      header: options.header,
      data: options.data,

      success: (res) => {
        resolve(res.data)
      },

      fail: (err) => {
        console.log(err)
        reject(err)
      },
    })
  })
}
