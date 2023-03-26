import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import ColorModeSwitcher from './ColorModeSwitcher';
import { AppContext } from './Context';
import store from './Redux/store'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <AppContext>
    <StrictMode>
      <Provider store={store}>
        <ColorModeScript />
        <ChakraProvider>
          {/* <ColorModeSwitcher /> */}
          <App />
        </ChakraProvider>
      </Provider>
    </StrictMode>
  </AppContext>
);
