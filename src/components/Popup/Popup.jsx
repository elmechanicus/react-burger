import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import popupStyle from './popup.module.css';
import { useEffect, useMemo } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const popupWindow = document.querySelector("#modals");

function Popup(props) {
  const { onCloseClick, onEscClose, children } = props;
  
  useEffect(() => {
    document.addEventListener("keydown", onEscClose);

    return () => {
      document.removeEventListener("keydown", onEscClose);
    };
  }, []);
  
      return ReactDOM.createPortal(
          <>
            <div className={`${popupStyle.popupContent}`}>
              <button type="button" className={`${popupStyle.buttonStyle} mt-10 mr-10`}>
                <CloseIcon type="primary" onClick={onCloseClick}/>
              </button>
              {children}
            </div>
            <ModalOverlay onCloseClick={onCloseClick}/>
          </>, popupWindow
        );
  };                                      


//Popup.propTypes = {}

export default Popup
