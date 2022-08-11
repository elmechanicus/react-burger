import overlayStyle from './modalOverlay.module.css';
import { useDispatch } from 'react-redux';
import { closePopup, closePopupOrder } from '../../features/popup/popupSlice';
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';


function ModalOverlay() {
  const dispatch = useDispatch();

  function closeAllModals() {
    dispatch(viewIngredientDetails({}));
    dispatch(closePopup(false));
    dispatch(closePopupOrder(false));
}

  return (
    <div className={overlayStyle.popupBackground} onClick={closeAllModals}></div>
  )
}


export default ModalOverlay