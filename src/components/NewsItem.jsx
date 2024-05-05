import React from 'react'
import newsBanner from '../assets/newsbanner.jpg'

const NewsItem = ({ article }) => {
    if (article.description !== null) {
        return (<div className="card d-inline-block" style={{ minWidth:"310px"}}>
            <img className="card-img-top" src={article.urlToImage?article.urlToImage:newsBanner} alt="headline thumbnail" style={{ width:"100%",height:"250px"}} />
                <div className="card-body">
                    <h5 className="card-title line-clamp">{article.title}</h5>
                    <p className="card-text line-clamp">{article.description}</p>
                    <a href={article.url} target='_blank' className="btn btn-primary">More details</a>
                </div>
        </div>)
        }else return null;
}

export default NewsItem