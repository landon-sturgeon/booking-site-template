import React from 'react';

import { 
  GlobalStyle 
} from "./global.style";

import LandingPage from "./pages/landing-page/landing-page.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <LandingPage />
    </div>
  );
}

export default App;
