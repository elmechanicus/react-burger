import navigationStyle from './navigationBar.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


const NavigationBar = (props) => {
  const { current, setCurrent } = props;
  return (
    <div className={`${navigationStyle.navigation}`}>
      <a href='#buns' className={`${navigationStyle.links}`}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
      </a>
      <a href='#sauces' className={`${navigationStyle.links}`}>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>Соусы</Tab>
      </a>
      <a href='#fillings' className={`${navigationStyle.links}`}>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
      </a>
    </div>
  )
}

export default NavigationBar