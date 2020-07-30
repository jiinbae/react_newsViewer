// news content를 저장하는 context.
// api 결과를 context 저장해서 그것만 각 파일에서 import 해서 쓸 수 있게?
// 일단 context 안에 sport 있는지 확인하고 없으면 api 호출.
// 호출한 값을 context 안에 저장.(무조건 context 안에 있는 값만 표시.)
// consumer랑 provider 어디서 사용할지.
// 실제 consumer를 사용해서 값 display 해주는 곳.

import React, { createContext, useState } from 'react';

const initialValue = {
  state: {
    newsContent: {
      kr: {
        all: [],
        entertainment: [],
        business: [],
        health: [],
        science: [],
        sports: [],
        technology: [],
      },
      jp: {
        all: [],
        entertainment: [],
        business: [],
        health: [],
        science: [],
        sports: [],
        technology: [],
      },
      us: {
        all: [],
        entertainment: [],
        business: [],
        health: [],
        science: [],
        sports: [],
        technology: [],
      },
      cn: {
        all: [],
        entertainment: [],
        business: [],
        health: [],
        science: [],
        sports: [],
        technology: [], 
      }
    },
  },
  action: { setNewsContent: () => {} },
};

const NewsContext = createContext(initialValue);

const NewsProvider = ({ children }) => {
  const [newsContent, setNewsContent] = useState(initialValue);
  
  const value = {
      ...newsContent,
      action: {
          setNewsContent: setNewsContent
        }
  }
  return (
    <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
  );
};

const { Consumer: NewsConsumer } = NewsContext;

export { NewsProvider, NewsConsumer };

export default NewsContext;