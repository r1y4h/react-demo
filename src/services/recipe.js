import BaseService from 'services/base'

export default class RecipeService extends BaseService {
  constructor(api) {
    const url = 'recipes/v2'
    super(api, url)
    this.api = api
    this.url = url
  }
}
