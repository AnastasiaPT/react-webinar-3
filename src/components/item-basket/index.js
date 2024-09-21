import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ItemBasket(props) {
    
    const callbacks = {
        onDelItem: e => {
          e.stopPropagation();
          props.onDeleteItemBasket(props.item);
        },
      };

   return (
    <div className={'ItemBasket'} >
       <div className="ItemB-title">{props.item.title}</div>
       <div className="ItemB-code">{}</div>
       <div className="ItemB-price">{new Intl.NumberFormat('ru-RU').format(props.item.price)}&nbsp;₽ </div>
       <div className="ItemB-amount">{new Intl.NumberFormat('ru-RU').format(props.item.amount)}&nbsp;шт</div>
      <div className="ItemB-actions">
        <button onClick={callbacks.onDelItem}>Удалить</button>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

ItemBasket.defaultProps = {
    onDelItem: PropTypes.func
};

export default React.memo(ItemBasket);
