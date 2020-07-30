import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import TopBar from '../components/TopBar';

const NewsPage = ({ match }) => {
  const country = match.params.country || 'kr';
  const category = match.params.category || 'all';
  console.log(`match : ${JSON.stringify(match)}`);
  // console.log(`location: ${JSON.stringify(location)}`);
  return (
    <>
      <TopBar />
      <Categories />
      <div className="content">
        <NewsList country={country} category={category} />
      </div>
    </>
  );
};

export default NewsPage;