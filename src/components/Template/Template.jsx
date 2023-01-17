import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader.jsx';
import styleHeader from './template.module.css';

function Template() {


  return (
    <>
      <header className={styleHeader.headerBackground}>
        <AppHeader />
      </header>
      <Outlet />
    </>
  )
}

export default Template