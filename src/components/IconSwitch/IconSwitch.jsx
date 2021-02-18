import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  const switchView = () => {
    onSwitch();
  }

  return (
    <div className="iconswitch__wrapper">
      <i className="material-icons switch__icon" onClick={switchView}>{icon}</i>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
