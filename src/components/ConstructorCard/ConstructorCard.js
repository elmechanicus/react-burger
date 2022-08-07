import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './constructorCard.module.css';
import { removeIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';
import { minusCounter } from '../../features/burgerIngredients/burgerIngredientsSlice';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';


function ConstructorCard({cardElement}) {
  const dispatch = useDispatch();

  const [, dragElement] = useDrag({
    type: 'elements',
    item: cardElement,
  });

  const removeIngredientHandler = (constructorId, ingredientId) => {
    dispatch(removeIngredient(constructorId));
    dispatch(minusCounter(ingredientId));
  }


  return (
    <div className={`mb-4 ${cardStyle.gridDragIcon}`} key={cardElement.constructorId} ref={dragElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              handleClose={()=>removeIngredientHandler(cardElement.constructorId, cardElement._id)}
              text={cardElement.name}
              price={cardElement.price}
              thumbnail={cardElement.image}
              key={cardElement.constructorId}
              />
    </div>
  )
}

export default ConstructorCard