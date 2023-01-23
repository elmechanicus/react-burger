import { Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, PageNotFound, RegisterPage, ResetPasswordPage, ProfilePage } from '../../pages/index.js';
import Template from '../Template/Template';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage/>} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/orders' />
          <Route path='/profile/orders/:id' />
          <Route path='/ingredients/:id' />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;