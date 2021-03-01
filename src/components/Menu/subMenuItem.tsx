/*
 * @Author: your name
 * @Date: 2021-03-01 22:32:11
 * @LastEditTime: 2021-03-01 22:46:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Menu/subMenuItem.tsx
 */
import React, { FC, useContext, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuItemProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenuItem: FC<SubMenuItemProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderClidren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if(childElement.type.displayName === 'MenuItem'){
        return React.cloneElement(childElement, {
          index: i
        });
      }else{
        console.error('Warning: SubMenuItem has a child which is not a MenuItem component');
      }
    });
    return (
      <ul className="viking-submenu">
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>
      {renderClidren()}
    </li>
  );
}

SubMenuItem.displayName = 'SubMenuItem';
export default SubMenuItem;