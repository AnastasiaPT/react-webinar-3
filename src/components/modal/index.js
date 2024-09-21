import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import './style.css';

function ModalLayout({ children }) {
  const cn = bem('ModalLayout');

  return (
    <div className={cn()}>
      <div className={cn('modal')}>
        <div className={cn('main')}>{children} </div>
      </div>
    </div>
  );
}

ModalLayout.propTypes = {
  sum: PropTypes.number,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default React.memo(ModalLayout);