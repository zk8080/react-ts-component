/*
 * @Author: your name
 * @Date: 2021-01-24 13:13:34
 * @LastEditTime: 2021-03-18 21:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/App.tsx
 */
import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenuItem from './components/Menu/subMenuItem';
import Icon from './components/Icon/icon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="apple-alt" theme="danger" size="9x"/>
        <Menu defaultIndex={'0'} mode="vertical" defaultOpenSubMenus={['3']}>
          <MenuItem>menu</MenuItem>
          <MenuItem disabled>menu1</MenuItem>
          <MenuItem>menu2</MenuItem>
          <SubMenuItem title="drop">
            <MenuItem>test1</MenuItem>
            <MenuItem>test2</MenuItem>
          </SubMenuItem>
        </Menu>
        <Button
          disabled
        >
          Hello
        </Button>
        <Button
          btnType={'primary'}
          size={'lg'}
          className="custom"
        >
          Hello 2
        </Button>
        <Button
          btnType={'danger'}
          size={'sm'}
        >
          Hello 3
        </Button>
        <Button
          btnType={'link'}
          href="http://www.baidu.com"
          target="_blank"
          // disabled
        >
          百度Link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
