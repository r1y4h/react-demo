import React from 'react'

export default ({ search, loading, message }) => {
  return (
    <div className="search-title p-3">
      <h5>Recipes about '{search || 'anything'}'</h5>
      {!loading && message && <div className="text-danger">{message}</div>}
    </div>
  )
}
