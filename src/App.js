import './App.scss';
import Header from './components/Header';
import Article from './components/Article';
import { Fragment } from 'react';
import Data from './renderData/renderData.json';

function App() {
  return (
    <Fragment>
      <Header />
      {Data.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </Fragment>
  );
}

export default App;
