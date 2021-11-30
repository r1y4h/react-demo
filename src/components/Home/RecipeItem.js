import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { observer } from 'mobx-react'
import React, { useEffect, useRef } from 'react'

import { useStores } from 'stores'

const RecipeItem = ({ recipeData = {} }) => {
  const recipeItemRef = useRef()
  const { recipeStore } = useStores()

  const { recipe = {} } = recipeData
  const { ingredientLines = [] } = recipe

  useEffect(() => {
    if (recipeData.shouldObserve) {
      let prevPositionY = 0
      const observableElement = recipeItemRef.current

      const observer = new IntersectionObserver(
        entities => {
          const positionY = entities && entities.length > 0 && entities[0].boundingClientRect.y
          if (prevPositionY > positionY) {
            recipeData.shouldObserve = false
            observer.unobserve(observableElement)

            recipeStore.SearchCriteria = {
              search: recipeStore.SearchCriteria.search,
              page: recipeStore.SearchCriteria.page + 1,
            }
          }
          prevPositionY = positionY
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      )

      observer.observe(observableElement)
      return () => {
        observer.unobserve(observableElement)
      }
    }
  }, [recipeStore, recipeData])

  return (
    <Card className="recipe-item bg-dark mb-4 p-1">
      <CardHeader>
        <h5 className="text-primary m-0">{recipe.label}</h5>
        <hr className="text-secondary bg-secondary"></hr>
      </CardHeader>
      <CardBody className="pt-0">
        <div ref={recipeItemRef} className="row">
          <Col xs="12" md="3" className="text-center mb-4">
            <img src={recipe.image} className="image-fluid" alt={recipe.label} />
          </Col>
          <Col xs="12" md="9">
            <div>Ingredients</div>
            <ul>
              {ingredientLines.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
        </div>
      </CardBody>
    </Card>
  )
}

export default observer(RecipeItem)
