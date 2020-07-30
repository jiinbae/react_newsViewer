import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const topBars = [
  {
    name: 'todoList',
    text: 'todoList',
  },
  {
    name: 'news',
    text: 'News',
  },

];

const TopBarBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const TopBar = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const TopBars = ({ onSelect }) => {
  return (
    <TopBarBlock>
      {topBars.map(c => (
      <TopBar
        key={c.name}
        activeClassName="active"
        // exact={c.name = 'news'}
        to={c.name === 'todolist' ? '/' : `/${c.name}`}
      >
        {c.text}
      </TopBar>
    ))}
    </TopBarBlock>
  );
};

export default TopBars;