import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tabs, tabid }) => (
  <h2>{tabid && tabs.filter(tab => tab.id === tabid)[0].content}</h2>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })),
}.isRequaired;

export default Tab;
