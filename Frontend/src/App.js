import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from "./ChatRoom";
import PageNotFound from './component/PageNotFound';
import 'animate.css'

function App() {
  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
        <Switch>
          <Route path={"/room"} component={ChatRoom}/>
          <Route path='' component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
