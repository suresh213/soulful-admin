import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from '../src/Components/Home/Home.js';

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
