import React from 'react'
import PropTypes from 'prop-types'

function IngredientDetales({name, picture}) {
  return (
    <div>
      <h3>Детали ингридиента</h3>
      <h2>{name}</h2>
      <img src={picture} alt={name} />
    </div>
    
  )
}

// IngredientDetales.propTypes = {}

export default IngredientDetales
