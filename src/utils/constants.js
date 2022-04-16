import PropTypes from 'prop-types';

export const URL = "https://norma.nomoreparties.space/api/ingredients";

export const objectIngredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
  proteins: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
})