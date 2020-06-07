import Api from 'services/api'
import RecipeService from 'services/recipe'

const options = {
  apiUrl: process.env.REACT_APP_API_URL,
  apiId: process.env.REACT_APP_API_ID,
  apiKey: process.env.REACT_APP_API_KEY,
}
const api = new Api(options)

export default {
  recipeService: new RecipeService(api),
}
