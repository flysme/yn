import http from './index'

export const getDesignSketchLibs = function () {
  return http.request({
    url: `/case/getDesignSketchLibs`,
    method: 'GET',
  })
}

export const getWebsiteConfig = function () {
  return http.request({
    url: `/website/getWebsiteConfig`,
    method: 'GET',
  })
}

// 效果图详情
export function getDesignSketchLibInfo(id) {
  return http.request({
    url: `/case/getDesignSketchLibInfo/` + id,
    method: 'GET',
  })
}
