import { Link } from 'react-router-dom';
import style404 from './page404.module.css';


export function Page404() {
  return (
    <>
      <div className={style404.notFound}></div>
      <Link to='/' className={`${style404.link} text text_type_main-medium`}>вернуться на главную</Link>
    </>
    
  )
}