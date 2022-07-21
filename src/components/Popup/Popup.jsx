import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import popupStyle from './popup.module.css';
import { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useDispatch } from "react-redux";
import { viewIngredientDetails } from '../../features/ingredientsDetails/ingredientsDetailsSlice';
import { closePopup, closePopupOrder } from "../../features/popup/popupSlice";


const popupWindow = document.querySelector("#modals");

function Popup(props) {
  const { onEscClose, children } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("keydown", onEscClose);

    return () => {
      document.removeEventListener("keydown", onEscClose);
    }
  }, [onEscClose]);

  function closeAllModals() {
    dispatch(viewIngredientDetails({}));
    dispatch(closePopup(false));
    dispatch(closePopupOrder(false));
}
  
      return ReactDOM.createPortal(
          <>
            <div className={`${popupStyle.popupContent}`}>
              <button type="button" className={`${popupStyle.buttonStyle} mt-10 mr-10`}>
              <CloseIcon type="primary" onClick={closeAllModals} />
              </button>
              {children}
            </div>
            <ModalOverlay />
          </>, popupWindow
        );
  };                                      

Popup.propTypes = {
  onEscClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Popup
