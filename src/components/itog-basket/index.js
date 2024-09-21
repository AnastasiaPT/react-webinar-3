import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ItogBasket(sum) {
    return (
    <div className="itogb">
      <span>Итого</span>
      <span> {new Intl.NumberFormat('ru-RU').format(sum.sum)} ₽ </span>
   </div>
  );
}

ItogBasket.propTypes = {
    sum: PropTypes.number
  };

export default React.memo(ItogBasket);
