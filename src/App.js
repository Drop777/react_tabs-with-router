import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './Components/Homepage/Homepage';
import TabsPage from './Components/Tabspage/Tabspage';

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
          <li><NavLink to="/home" exact>Home</NavLink></li>
          <li><NavLink to="/tabs">Tabs</NavLink></li>
        </ul>
      </nav>
      <Route path="/home" exact component={HomePage} />
      <Route
        path="/tabs/:tabid?"
        // eslint-disable-next-line max-len
        render={({ match }) => <TabsPage tabs={tabs} tabid={match.params.tabid} />}
      />
    </BrowserRouter>
  </div>
);

export default App;
