import React from 'react';
import './style.scss';

function Article(props) {
  const { image, title, description } = props.article;
  return (
    <div className='article-container'>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Article;
