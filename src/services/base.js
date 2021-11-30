export default class BaseService {
  constructor(api, url = '') {
    this.api = api
    this.url = url
  }
  get = (url, payload) => {
    return this.api.get(`${this.url}${url || ''}`, payload)
  }
  getById = id => {
    return this.api.get(`${this.url}${id}`)
  }
  fetchTable = payload => {
    return this.api.get(this.url, payload)
  }
}
