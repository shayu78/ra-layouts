import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import PropTypes from 'prop-types';

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="listview">
      {items.map((value) => <ShopItem key={value.id} item={value} />)}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};
