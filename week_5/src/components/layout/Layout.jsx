import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = () => (
  <>
    <ScrollToTop />
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
