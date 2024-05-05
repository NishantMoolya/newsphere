import React from 'react'
import NewsBoard from '../NewsBoard'
import Header from '../Header';

const HomePage = ({ country,search }) => {
    const page = 5;
  return (
    <div>
    <Header country={country} />
    <NewsBoard country={country} category={"general"} page={page} search={search} />
    <NewsBoard country={country} category={"business"} page={page} search={search} />
    <NewsBoard country={country} category={"entertainment"} page={page} search={search} />
    <NewsBoard country={country} category={"sports"} page={page} search={search} />
    <NewsBoard country={country} category={"health"} page={page} search={search} />
    <NewsBoard country={country} category={"science"} page={page} search={search} />
    <NewsBoard country={country} category={"technology"} page={page} search={search} />
  </div>
  )
}

export default HomePage