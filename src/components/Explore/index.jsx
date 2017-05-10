import React, { PropTypes } from 'react';

const Explore = ({ className, history, location, match }) => {
  console.log(history);
  console.log(location);
  console.log(match);
  return (
    <div>
      Explore
    </div>
  );
};

Explore.displayName = 'Explore';

Explore.propTypes = {
  className: PropTypes.string,
};

export default Explore;
