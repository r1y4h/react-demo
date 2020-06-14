export const useRecipeDataParser = {
  parseData: (data = [], page = 0) => {
    if (data && data.length) {
      let shouldObserve = false
      return data.map((item, index) => {
        if (!shouldObserve) {
          shouldObserve = (100 * index) / data.length >= 60
          return { ...item, shouldObserve }
        }
        return { ...item }
      })
    }

    return []
  },
}
