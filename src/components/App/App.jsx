import AppHeader from '../AppHeader/AppHeader.jsx';
import styleApp from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, PageNotFound, RegisterPage, ResetPasswordPage, ProfilePage } from '../../pages/index.js';


function App() {

  return (
    <>
      <div className={styleApp.appBackground}>
        <AppHeader />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/ingredients/:id' />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
