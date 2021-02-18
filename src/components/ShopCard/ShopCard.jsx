import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {
  const { item } = props;

  const CardComponentStyle = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: '90%',
    backgroundPosition: 'center -15px',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={CardComponentStyle} className="card">
      <div className="card__header">
        <h3 className="card__name">{item.name}</h3>
        <h5 className="card__color">{item.color}</h5>
      </div>
      <div className="card__footer">
        <div className="card__price">{`$${item.price}`}</div>
        <button className="cart__button">Add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};
