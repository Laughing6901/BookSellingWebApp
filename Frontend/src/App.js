import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
        <Switch>
          <Route path={"/room/:id"} component={ChatRoom}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
