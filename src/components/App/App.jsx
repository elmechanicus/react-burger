import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage } from '../../pages/index.js';


function App() {

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' />
        <Route path='/forgot-password' />
        <Route path='/reset-password' />
        <Route path='/profile' />
        <Route path='/ingredients/:id' />
        <Route path='*' />
      </Routes>
    </>
  );
}

export default App;
