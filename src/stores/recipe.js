import { makeObservable, observable } from 'mobx'
import BaseStore from 'stores/base'

const defaultSearchCriteria = {
  search: 'chicken',
  page: 0,
}

class RecipeStore extends BaseStore {
  constructor(api) {
    super(api)
    this.api = api

    makeObservable(this, {
      SearchCriteria: observable,
    })
  }

  SearchCriteria = defaultSearchCriteria
}

export default RecipeStore
