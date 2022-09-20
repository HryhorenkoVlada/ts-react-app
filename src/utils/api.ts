import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

//import { JsonValue } from '../types/json-typings'

interface session {
  url: string
  accessToken?: string
  refreshToken?: string
}

interface serviceRequest {
  (url: string, httpService: AxiosInstance, config?: AxiosRequestConfig): void
}

const getSessionUrl = (): session => {
  const dev = true
  const baseUrl = ''

  return {
    url: baseUrl,
  }
}

const { url } = getSessionUrl() ?? {}

const httpService = axios.create({
  withCredentials: true,
  baseURL: url,
})

httpService.interceptors.request.use((config: AxiosRequestConfig) => {
  const { accessToken } = getSessionUrl() ?? {}

  // TODO: change logic namespace

  config.baseURL = `${config.baseURL}/api`

  if (accessToken) {
    //we add bearer
  }

  return config
})

httpService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

const get = (
  url: string,
  config: AxiosRequestConfig = {},
  service = httpService
) => service.get(url, config)

const post = (
  url: string,
  payload?: any,
  config: AxiosRequestConfig = {},
  service = httpService
) => service.post(url, payload, config)

const put: serviceRequest = (url, service = httpService, config) =>
  service.put(url, config)
const httpDelete: serviceRequest = (url, service = httpService, config) =>
  service.delete(url, config)

export { httpService, get, post, put, httpDelete }
