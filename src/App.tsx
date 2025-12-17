import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Content,
  Theme
} from '@carbon/react';
import { HomePage, ExamplePage } from './pages';
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
          </Routes>
        </Content>
      </Theme>
    </BrowserRouter>
  );
}

export default App;

