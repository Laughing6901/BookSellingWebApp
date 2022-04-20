import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
        <Switch>
          
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
