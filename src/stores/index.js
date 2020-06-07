import React from 'react'

import services from 'services'
import RecipeStore from 'stores/recipe'

const storesContext = React.createContext({
  recipeStore: new RecipeStore(services.recipeService),
})

export default () => React.useContext(storesContext)
