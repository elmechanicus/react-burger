import overlayStyle from './modalOverlay.module.css';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../features/popup/popupSlice';

function ModalOverlay() {
  const dispatch = useDispatch();

  return (
    <div className={overlayStyle.popupBackground} onClick={()=>dispatch(closePopup(false))}></div>
  )
}


export default ModalOverlay
