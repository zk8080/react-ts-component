/*
 * @Author: your name
 * @Date: 2021-01-24 21:27:18
 * @LastEditTime: 2021-01-31 14:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Button/button.tsx
 */
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode,
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    size,
    disabled,
    btnType,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': btnType === 'link' && disabled,
  })

  if(btnType === 'link' && href){
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }else{
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;
