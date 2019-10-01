import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Tab from '../Tab/Tab';

const TabsPage = ({ tabs, tabid }) => (
  <>
    <nav>
      <ul>
        {tabs
          .map(tab => (
            <li
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
    <Tab tabs={tabs} tabid={tabid} />
  </>
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequaired;

export default TabsPage;
