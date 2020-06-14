import { decorate, observable } from 'mobx'
import BaseStore from 'stores/base'

const defaultSearchCriteria = {
  search: 'chicken',
  page: 0,
}

class RecipeStore extends BaseStore {
  constructor(api) {
    super(api)
    this.api = api
  }

  SearchCriteria = defaultSearchCriteria
}

export default decorate(RecipeStore, {
  SearchCriteria: observable,
})
