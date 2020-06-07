import BaseStore from 'stores/base'

class RecipeStore extends BaseStore {
  constructor(api) {
    super(api)
    this.api = api
  }
}

export default RecipeStore
