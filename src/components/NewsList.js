import React, { useContext } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import NewsContext from '../contexts/NewsContent';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const NewsList = () => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);
 
//   useEffect(() => {
//     // async를 사용하는 함수 따로 선언
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
 
//   // 대기 중일 때
//   if (loading) {
//     return <NewsListBlock>대기 중...</NewsListBlock>;
//   }
//   // 아직 articles 값이 설정되지 않았을 때
//   if (!articles) {
//     return null;
//   }
 
//   // articles 값이 유효할 때
//   return (
//     <NewsListBlock>
//       {articles.map(article => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

const NewsList = ({ country, category }) => {
  const { state, action } = useContext(NewsContext);

  const [loading, response, error, setResponse] = usePromise(() => {
    const countryQuery = `country=${country}`; // 국가 변경하기
    const query = category === 'all' ? '' : `&category=${category}`; // category 값에 따라 주소가 동적으로 변화. query 요청 시 포함.
    // console.log(`[USE_PROMISE]${country}, ${category} `);
    if (state.newsContent[country][category].length === 0) {
      let response = axios.get(
        `https://newsapi.org/v2/top-headlines?${countryQuery}${query}`, // 국가 변경 및 카테고리 변경.
        {
          headers: {
            'x-api-key': '0106e2c7f2e94c57bfb33b63b97f2a60',
          },
        },
      );
      return response;
    } else {
      let response = {
        data: {
          articles: state.newsContent[country][category],
        },
      };
      return response;
    }
  }, [country, category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  // if (!response) {
  //   // return null;
  // }
  if (response) {
    // console.log(`[RESPONSE] ${country} ${category} ${response.data.articles}`);
    let nc = { state: { ...state }, action: { ...action } };
    nc.state.newsContent[country][category] = response.data.articles;
    // nc.articles = response.data.articles; ???

    action.setNewsContent(nc);
    setResponse(null);
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  // const { articles } = response.data;
  const articles = state.newsContent[country][category];

  console.log(articles);

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

