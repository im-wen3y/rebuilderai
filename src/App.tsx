import { RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import reset from './Reset';
import router from './Router';
import './App.css';

function App() {
  return (
    <div>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
