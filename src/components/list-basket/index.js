import React from 'react';
import PropTypes from 'prop-types';
import ItemBasket from '../item-basket';
import './style.css';

function ListBasket({ list,  onDeleteItemBasket }) {

   return list.map(item => (
        <div key={item.code} className="ListB-item">
          <ItemBasket item={item} onDeleteItemBasket={onDeleteItemBasket} />
        </div>
      ))
   
}

export default React.memo(ListBasket);
