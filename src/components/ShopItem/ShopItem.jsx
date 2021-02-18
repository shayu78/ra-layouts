import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
  const { item } = props;

  const ItemImageContainerStyle = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: '90%',
    backgroundPosition: 'center -25px',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '100%',
  }

  return (
    <div className="item">
      <div style={ItemImageContainerStyle}></div>
      <h3 className="item__name">{item.name}</h3>
      <h5 className="item__color">{item.color}</h5>
      <div className="item__price">{`$${item.price}`}</div>
      <button className="cart__button">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};
