import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const NewsBoard = ({ country, category, page, search }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${page}&q=${search}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(url).then(res => res.json())
    .then(data => {
      if(data.articles){
        setArticles([...data.articles]);
      }
      }).catch(err => console.log(`an error in getting news:${err}`))
      .finally(() => setIsLoading(false));
  }, [country,search]);
  return (
    <div className='container py-4'>
      <h4 style={{ fontWeight: '600', color: 'GrayText', textTransform: 'capitalize' }}>{category}</h4>
      <div className='d-flex overflow-scroll gap-4'>
        {
          isLoading?<Spinner />:articles.length !== 0?articles.map((article, ind) => <div className='col'><NewsItem key={ind} article={article} /></div>):<h4>No results found</h4>
        }
      </div>
    <hr />
    </div>
  )
}

export default NewsBoard