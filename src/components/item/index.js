import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item(props) {
   const callbacks = {
    onAddItem: e => {
      e.stopPropagation();
      props.onAddItemBasket(props.item);
    },
  };

  return (
    <div className={'Item'} >
       <div className="Item-title">{props.item.title}</div>
       <div className="Item-price">{new Intl.NumberFormat('ru-RU').format(props.item.price)}&nbsp;₽</div>
      <div className="Item-actions">
        <button onClick={callbacks.onAddItem}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
};

Item.defaultProps = {
  onAddItem: PropTypes.func
};

export default React.memo(Item);
