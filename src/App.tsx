import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ObjectsPage from './pages/ObjectsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="objects" element={<ObjectsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<div>404 - Страница не найдена</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
