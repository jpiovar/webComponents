import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Content,
  Theme
} from '@carbon/react';
import { HomePage, ExamplePage, WebPage } from './pages';
import './App.scss';

function Navigation() {
  const location = useLocation();

  return (
    <HeaderNavigation aria-label="Navigation">
      <HeaderMenuItem
        as={Link}
        to="/"
        isActive={location.pathname === '/'}
      >
        Home
      </HeaderMenuItem>
      <HeaderMenuItem
        as={Link}
        to="/examples"
        isActive={location.pathname === '/examples'}
      >
        Examples
      </HeaderMenuItem>
      <HeaderMenuItem
        as={Link}
        to="/web-page"
        isActive={location.pathname === '/web-page'}
      >
        Web Components
      </HeaderMenuItem>
    </HeaderNavigation>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Theme theme="g100">
        <Header aria-label="Carbon + Vite + React">
          <HeaderName prefix="IBM">
            Carbon Design System
          </HeaderName>
          <Navigation />
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/examples" element={<ExamplePage />} />
            <Route path="/web-page" element={<WebPage />} />
          </Routes>
        </Content>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

