// import Mock from 'mockjs'

// 导入所有文件
const files = import.meta.globEager('./api/*.json')
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const mockApiConfigs = []

for (let fileName in files) {
  const result = fileName.match(/\.(?<apiName>.*)\.json/)

  mockApiConfigs.push({
    url:  result.groups.apiName,
    data: files[fileName],
  })
}

/**
 * 生成数据
 */
export function useMock() {
  let map = {}
  for (let config of mockApiConfigs) {
    console.log(config.url);
    map[config.url] = config.data
    // Mock.mock(config.url, config.data)
  }
}
