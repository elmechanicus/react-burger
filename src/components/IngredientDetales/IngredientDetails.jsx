import ingredientStyles from './ingredientDetails.module.css';
import { useSelector } from 'react-redux';


function IngredientDetails() {
  const ingredient = useSelector(state => state.ingredientsDetails.ingredientInfo);

  return (
    <div className={`${ingredientStyles.content} mt-10 ml-10 mr-10 mb-15`}>
      <h3 className={`${ingredientStyles.title} text text_type_main-large`}>Детали ингрeдиента</h3>
      <img src={`${ingredient.image_large}`} alt={ingredient.name} />
      <h2 className={`${ingredientStyles.subtitle} text text_type_main-medium mt-4 mb-8`}>{ingredient.name}</h2>
      <ul className={`${ingredientStyles.composition} text text_type_main-default text_color_inactive`}>
        <li className={`${ingredientStyles.ingredientComposition} mr-5`}>Калории, ккал <span>{ingredient.calories}</span></li>
        <li className={`${ingredientStyles.ingredientComposition} mr-5`}>Белки, г <span>{ingredient.proteins}</span></li>
        <li className={`${ingredientStyles.ingredientComposition} mr-5`}>Жиры, г <span>{ingredient.fat}</span></li>
        <li className={`${ingredientStyles.ingredientComposition}`}>Углеводы, г <span>{ingredient.carbohydrates}</span></li>
      </ul>
    </div>
    
  )
}


export default IngredientDetails
