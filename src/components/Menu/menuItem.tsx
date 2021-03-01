/*
 * @Author: your name
 * @Date: 2021-01-31 15:25:29
 * @LastEditTime: 2021-03-01 22:29:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Menu/menuItem.tsx
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, className, index, disabled, style } = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'number')){
      context.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem';
export default MenuItem;