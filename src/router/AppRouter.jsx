import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { HomePage, DashboardPage, LoginPage, RegisterPage, PrimeraPage, SegundaPage, TerceraPage } from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <PrivateRoute path="dashboard" >
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute path="primera" element={<PrimeraPage />}>
          <PrimeraPage />
        </PrivateRoute>
        <PrivateRoute path="segunda" element={<SegundaPage />}>
          <SegundaPage />
        </PrivateRoute>
        <PrivateRoute path="tercera" element={<TerceraPage />}>
          <TerceraPage />
        </PrivateRoute>
      </Route>
    </Routes>
  );
};
