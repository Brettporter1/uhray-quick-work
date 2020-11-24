import './App.scss';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import { Fragment, useEffect, useState } from 'react';
import { getArticles } from './API';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await getArticles();
        setLoading(false);
        setArticles(res.data.articles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchArticles();
  }, []);

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  const changePagination = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Fragment>
      <Header
        articlesPerPage={articlesPerPage}
        changePagination={changePagination}
        totalArticles={articles.length}
        currentPage={currentPage}
      />
      <ArticleList currentArticles={currentArticles} loading={loading} />
    </Fragment>
  );
}

export default App;
