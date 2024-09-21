import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ControlsBasket({ onClose = () => { }}) {
  return (
   
   <div className={'controlsbasket-modal'}>
      <div className={'controlsbasket-head'}>
          <h2 className={'controlsbasket-title'}>Корзина</h2>
          <button className='controlsbasket-btn-close' onClick={onClose}>Закрыть</button>
      </div>
   </div>
  );
}

ControlsBasket.propTypes = {
  onClose: PropTypes.func,
};


export default React.memo(ControlsBasket);