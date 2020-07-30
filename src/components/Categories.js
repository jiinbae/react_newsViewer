import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    countryName: 'kr',
    categoryName: 'all',
    text: '한국 전체보기',
  },
  {
    countryName: 'kr',
    categoryName: 'business',
    text: '한국 비즈니스',
  },
  {
    countryName: 'kr',
    categoryName: 'entertainment',
    text: '한국 엔터테인먼트',
  },
  {
    countryName: 'kr',
    categoryName: 'health',
    text: '한국 건강',
  },
  {
    countryName: 'kr',
    categoryName: 'science',
    text: '한국 과학',
  },
  {
    countryName: 'kr',
    categoryName: 'sports',
    text: '한국 스포츠',
  },
  {
    countryName: 'kr',
    categoryName: 'technology',
    text: '한국 기술',
  },
  {
    countryName: 'us',
    categoryName: 'all',
    text: '미국 전체보기',
  },
  {
    countryName: 'us',
    categoryName: 'business',
    text: '미국 비즈니스',
  },
  {
    countryName: 'us',
    categoryName: 'entertainment',
    text: '미국 엔터테인먼트',
  },
  {
    countryName: 'us',
    categoryName: 'health',
    text: '미국 건강',
  },
  {
    countryName: 'us',
    categoryName: 'science',
    text: '미국 과학',
  },
  {
    countryName: 'us',
    categoryName: 'sports',
    text: '미국 스포츠',
  },
  {
    countryName: 'us',
    categoryName: 'technology',
    text: '미국 기술',
  },
  {
    countryName: 'jp',
    categoryName: 'all',
    text: '일본 전체보기',
  },
  {
    countryName: 'jp',
    categoryName: 'business',
    text: '일본 비즈니스',
  },
  {
    countryName: 'jp',
    categoryName: 'entertainment',
    text: '일본 엔터테인먼트',
  },
  {
    countryName: 'jp',
    categoryName: 'health',
    text: '일본 건강',
  },
  {
    countryName: 'jp',
    categoryName: 'science',
    text: '일본 과학',
  },
  {
    countryName: 'jp',
    categoryName: 'sports',
    text: '일본 스포츠',
  },
  {
    countryName: 'jp',
    categoryName: 'technology',
    text: '일본 기술',
  },
  {
    countryName: 'cn',
    categoryName: 'all',
    text: '중국 전체보기',
  },
  {
    countryName: 'cn',
    categoryName: 'business',
    text: '중국 비즈니스',
  },
  {
    countryName: 'cn',
    categoryName: 'entertainment',
    text: '중국 엔터테인먼트',
  },
  {
    countryName: 'cn',
    categoryName: 'health',
    text: '중국 건강',
  },
  {
    countryName: 'cn',
    categoryName: 'science',
    text: '중국 과학',
  },
  {
    countryName: 'cn',
    categoryName: 'sports',
    text: '중국 스포츠',
  },
  {
    countryName: 'cn',
    categoryName: 'technology',
    text: '중국 기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
/* <select name="job">
    <option value="">직업선택</option>
    <option value="학생">학생</option>
    <option value="회사원">회사원</option>
    <option value="기타">기타</option>
</select> */
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

const Categories = ({ onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
      <Category
        key={c.text}
        activeClassName="active"
        exact={c.countryName === 'kr' && c.categoryName === 'all'}
        to={c.countryName === 'kr' && c.categoryName === 'all' ? '/news' : `/news/${c.countryName}/${c.categoryName}`}
      >
        {c.text}
      </Category>
    ))}
    </CategoriesBlock>
  );
};

export default Categories;