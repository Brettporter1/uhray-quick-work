import React, { Fragment } from 'react';
import Article from '../Article';
import './style.scss';

function ArticleList({ currentArticles, loading }) {
  if (loading) {
    return (
      <div className='loading-container'>
        <img
          src='https://media.giphy.com/media/3AMRa6DRUhMli/source.gif'
          alt='loading'
          className='loading-gif'
        />
      </div>
    );
  }
  return (
    <Fragment>
      {currentArticles.map((article) => (
        <Article
          key={article._id}
          media={article.media}
          title={article.title}
          summary={article.summary}
        />
      ))}
    </Fragment>
  );
}

export default ArticleList;
