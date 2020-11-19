import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateclassName = createGenerateClassName({
  productionPrefix: 'co'
});


export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateclassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
