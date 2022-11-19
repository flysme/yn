import http from './index'

export const fetchData = function () {
  return http.request({
    url: `api/getData`,
    method: 'GET'
  })
}

export const postData = function (data) {
  return http.request({
    url: `api/postData`,
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}

export const updateExample = function (data, id) {
  return http.request({
    url: `api/updateExample/${id}`,
    method: 'PUT',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}

export const dataOverView = function () {
  return http.request({
    url: `api/dataOverView`,
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

export const getLibraryList = function () {
  return http.request({
    url: `api/getLibraryList`,
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}