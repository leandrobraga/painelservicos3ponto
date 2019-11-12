import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { setItemSelected } from '../actions';

const ItemMenuTop = (props) => {
  const { itemSelected, optionMenu } = props;
  return (
    <Link
      onClick={() => {
        props.setItemSelected(props.optionMenu);
      }}
      className={
        itemSelected.id === optionMenu.id ? 'navbar-item is-tab is-active' : 'navbar-item is-tab'
      }
      to={optionMenu.link}
    >
      <section className="has-text-centered">
        <span className="icon">
          {optionMenu.icon}
        </span>
        <br />
        <span style={{ fontSize: '90%' }}>{optionMenu.label}</span>
      </section>
    </Link>
  );
};

ItemMenuTop.propTypes = {
  optionMenu: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  setItemSelected: PropTypes.func.isRequired,
  itemSelected: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setItemSelected,
  },
  dispatch,
);

const mapStateToProps = (state) => (
  {
    itemSelected: state.menuTop.itemSelected,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(ItemMenuTop);
