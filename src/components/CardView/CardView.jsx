import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import PropTypes from 'prop-types';

export default function CardView(props) {
  const { cards } = props;

  return (
    <div className="cardview">
      {cards.map((value) => <ShopCard key={value.id} item={value} />)}
    </div>
  );
}

CardView.propTypes = {
  cards: PropTypes.array.isRequired,
};
