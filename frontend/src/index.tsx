import ReactDOM from 'react-dom';
import './index.css';

import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import CommunityPage from './routes/CommunityPage';
import CreatePage from './routes/CreatePage';
import HomePage from './routes/HomePage';
import NewReleasesPage from './routes/NewReleasesPage';

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/releases" component={NewReleasesPage} />
      <Route exact path="/community" component={CommunityPage} />

      <Route exact path="/*" render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
