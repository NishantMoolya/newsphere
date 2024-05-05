import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const Header = ({ country }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(url).then(res => res.json()).then(data =>{
      let arr = [];
      let index = 0;
      while(index < 3){
        if (data.articles[index].urlToImage) {
          const url = data.articles[index].urlToImage;
          const headings = data.articles[index].title.split('-');
          const title = headings[0];
          const channel = headings[1];
          arr.push({url,channel,title});
          index++;
        }
      }
       setImages(arr);
      })
    .catch(err => console.log(`an error in getting news:${err}`))
    .finally(() => setIsLoading(false));
  },[country]);
  return (
    <>
    {isLoading?<div style={{ height:"50vh",display:'flex',alignItems:'center',justifyContent:'center'}}><Spinner /></div>:images.length !== 0?<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={images[0]?.url} class="d-block w-100" alt="headline thumbnail" />
      <div class="carousel-caption d-none d-md-block">
        <h5>{images[0]?.channel}</h5>
        <p>{images[0]?.title}</p>
      </div>
      <div class="carousel-caption d-block d-md-none">
      <p>{images[0]?.title}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={images[1]?.url} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h5>{images[1]?.channel}</h5>
        <p>{images[1]?.title}</p>
      </div>
      <div class="carousel-caption d-block d-md-none">
      <p>{images[1]?.title}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={images[2]?.url} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h5>{images[2]?.channel}</h5>
        <p>{images[2]?.title}</p>
      </div>
      <div class="carousel-caption d-block d-md-none">
      <p>{images[2]?.title}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>:<div style={{ height:"50vh",display:'flex',alignItems:'center',justifyContent:'center'}}>No results found</div>}
    </>
  )
}

export default Header