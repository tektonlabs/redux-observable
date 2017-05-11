import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActiveFilter, constants } from 'modules/ActiveFilter';
import Header from 'components/Header';
import Filters from 'containers/Filters';
import ToWatchList from 'containers/ToWatchList';

class Saved extends PureComponent {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    setActiveFilter: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      pathname,
      setActiveFilter,
    } = this.props;

    setActiveFilter(constants.routesMap[pathname]);
  }

  render() {
    return (
      <div>
        <Header />
        <Filters />
        <ToWatchList />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

const mapDispatchToProps = {
  setActiveFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
