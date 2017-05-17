import React, { PropTypes } from 'react';
import './styles.css';

const EmptyResults = ({ className }) => {
    return (
      <div>No results found!</div>
    );
};

EmptyResults.displayName = 'EmptyResults';

EmptyResults.propTypes = {
    className: PropTypes.string,
};

export default EmptyResults;
