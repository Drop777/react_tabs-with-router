import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/tabs">Tabs</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs" component={TabsPage} />
      </Switch>
      <Route
        path="/tabs/:tabId"
        render={({ match }) => (
          <Tabs tabsList={tabs} tabId={match.params.tabId} />
        )
        }
      />
    </BrowserRouter>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

const TabsPage = ({ match }) => (
  <div>
    <nav>
      <ul>
        {tabs
          .map(tab => (
            <li>
              <NavLink
                to={`${match.path}/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  </div>
);

const Tabs = ({ tabsList, tabId }) => (
  <h2>{tabsList.filter(tab => tab.id === tabId)[0].content}</h2>
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequaired;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })),
}.isRequaired;

export default App;
