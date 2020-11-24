import React from 'react';

function Article({ media, title, summary }) {
  return (
    <div className='article-container'>
      <img src={media} alt={title} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <hr />
    </div>
  );
}

export default Article;
