import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from '@bem-react/classname';
import { plural } from "../../utils";
import './style.css';

function Basket({ sum = 0, amount = 0 }) {
  const cn = bem('Basket');

  return (
    <div className={cn()}>
      <span className={cn('title')}>В корзине:</span>
      <span className={cn('data')}>
        {amount
          ? `${amount} ${plural(amount, { one: "товар", few: "товара", many: "товаров" })}
            / ${new Intl.NumberFormat('ru-RU').format(sum)} ₽`
          : "пусто"
        }
      </span>
    </div>
  );
}

Basket.propTypes = {
  sum: PropTypes.number,
  amount: PropTypes.number
};

export default React.memo(Basket);