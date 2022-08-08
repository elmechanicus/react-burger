import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyle from './constructorCard.module.css';
import { removeIngredient } from '../../features/burgerConstructor/burgerConstructorSlice';
import { minusCounter } from '../../features/burgerIngredients/burgerIngredientsSlice';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import {useRef} from 'react'


function ConstructorCard({cardElement, index, moveListElement}) {
  const dispatch = useDispatch();
  const refElement = useRef(null);

  const [{opacity}, dragElement] = useDrag({
    type: 'elements',
    item: { index }, 
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1
    })
  });

  const [{handlerId}, dropElement] = useDrop({
    accept: 'elements',
    collect(monitor) {
    return {
      handlerId: monitor.getHandlerId(),
    }
    },
    hover: (item, monitor) => {
      if (!refElement.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = refElement.current?.getBoundingClientRect();//определяем область
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;//середина элемента
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
      // если тащим вниз до середины нижнего элемента
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      // если тащим вверх до середины верхнего элемента
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      moveListElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
        },
  })

  const removeIngredientHandler = (constructorId, ingredientId) => {
    dispatch(removeIngredient(constructorId));
    dispatch(minusCounter(ingredientId));
  }

  const dragDropRefElement = dragElement(dropElement(refElement));

  return (
    <div className={`mb-4 ${cardStyle.gridDragIcon}`} style={{ opacity }} key={cardElement.constructorId} ref={dragDropRefElement} data-handler-id={handlerId}>
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