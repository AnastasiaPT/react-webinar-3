import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import ItemBasket from '../item';
import './style.css';

function List({ list,  onAddItemBasket }) {

   return list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} onAddItemBasket={onAddItemBasket} />
        </div>
      ))
   
}

export default React.memo(List);
