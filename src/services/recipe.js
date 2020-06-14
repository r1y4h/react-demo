import BaseService from 'services/base'

export default class BookmarkService extends BaseService {
  constructor(api) {
    const url = 'search'
    super(api, url)
    this.api = api
    this.url = url
  }
}
