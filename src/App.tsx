/*
 * @Author: your name
 * @Date: 2021-01-24 13:13:34
 * @LastEditTime: 2021-03-01 22:47:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/App.tsx
 */
import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenuItem from './components/Menu/subMenuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem index={0}>menu</MenuItem>
          <MenuItem index={1} disabled>menu1</MenuItem>
          <MenuItem index={2}>menu2</MenuItem>
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
