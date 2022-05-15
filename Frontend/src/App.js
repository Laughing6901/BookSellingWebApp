import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/views/Login";

function App() {
  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
        <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
