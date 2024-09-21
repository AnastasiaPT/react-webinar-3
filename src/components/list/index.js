import React from 'react';
import Item from '../item';
import ItemBasket from '../item-basket';
import './style.css';

function List({ type = true, list,  onAddItemBasket, onDeleteItemBasket}) {

   return list.map(item => (
        <div key={item.code} className="List-item">
         {type && <Item item={item} onAddItemBasket={onAddItemBasket} />}
         {!type && <ItemBasket item={item} onDeleteItemBasket={onDeleteItemBasket} />}
        </div>
      ))
   
}

export default React.memo(List);
