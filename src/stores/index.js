import React from 'react'

import RecipeStore from 'stores/recipe'
import services from 'services'

const storesContext = React.createContext({
  recipeStore: new RecipeStore(services.recipeService),
})

export const useStores = () => React.useContext(storesContext)
