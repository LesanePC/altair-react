import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header.tsx';
import { Footer } from '../components/layout/Footer.tsx';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
