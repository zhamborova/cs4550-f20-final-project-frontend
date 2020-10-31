import React from 'react';
import './news-card.css'

const NewsCard = ({article}) =>
    <div className="card col-3 card-news" style={{width: "18rem",
        background: `url(${article.urlToImage})`}} key={article.id}>
        <div className="card-body d-flex">
            <div className=" card-title-container">
                <p className="card-title">{article.title} </p>
            </div>
        </div>
    </div>


export default NewsCard;