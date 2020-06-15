import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'

import { useDebounce } from 'hooks/useDebounce'
import { useRecipeDataParser } from 'hooks/useRecipeDataParser'
import { useStores } from 'stores'
import Heading from 'components/Home/Heading'
import Loader from 'components/Common/Loader'
import MainContainer from 'components/Common/MainContainer'
import RecipeItem from 'components/Home/RecipeItem'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [noResultMessage, setNoResultMessage] = useState('')
  const { recipeStore } = useStores()

  const { SearchCriteria, Table } = recipeStore

  const fetchRecipes = useDebounce(async (payload) => {
    recipeStore.SearchCriteria.page === 0 && setRecipes([])

    await recipeStore.fetchTable(payload)

    const {
      SearchCriteria: { page },
      Table: { data },
    } = recipeStore
    const recipeData = useRecipeDataParser.parseData(data, page)

    if (recipeData.length) {
      if (page === 0) {
        setRecipes(recipeData)
      } else {
        setRecipes((items) => items.concat(recipeData))
      }
      setNoResultMessage('')
    } else {
      if (page === 0) {
        setRecipes([])
        recipeStore.SearchCriteria.search && setNoResultMessage('No results found')
      } else {
        setRecipes((items) => items)
      }
    }
  })

  useEffect(() => {
    const pageSize = 10
    fetchRecipes({ q: recipeStore.SearchCriteria.search, from: recipeStore.SearchCriteria.page, to: pageSize })
  }, [recipeStore.SearchCriteria, fetchRecipes])

  return (
    <MainContainer>
      <Heading search={SearchCriteria.search} loading={Table.loading} message={noResultMessage} />
      {recipes.map((recipeData, index) => (
        <RecipeItem key={index} recipeData={recipeData} />
      ))}
      <Loader show={Table.loading} className="pl-3" />
    </MainContainer>
  )
}

export default observer(Home)
