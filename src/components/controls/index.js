import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Basket from '../basket';

function Controls({ onAdd = () => { }, sum, amount }) {
  return (
    <div className="Controls">
    <Basket sum={sum} amount={amount} />
    <button className='Controls-button' onClick={() => onAdd()}>Перейти</button>
  </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};


export default React.memo(Controls);
