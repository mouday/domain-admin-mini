import Mock from 'mockjs'

// 导入所有文件
const files = import.meta.globEager('./api/*.json')
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const mockApiConfigs = []

for (let fileName in files) {
  const result = fileName.match(/\.(?<apiName>.*)\.json/)

  mockApiConfigs.push({
    url:  'https://mouday.github.io/domain-admin-mini' + result.groups.apiName,
    data: files[fileName],
  })
}

/**
 * 生成数据
 */
export function useMock() {
  for (let config of mockApiConfigs) {
    console.log(config.url);
    Mock.mock(config.url, config.data)
  }
}
