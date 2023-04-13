import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>

                        <span class="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small className="text-body-secondary text-danger" style={{ fontWeight: 'bolder' }}>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm" style={{ background: "hwb(313 0% 10%)", border: "4px solid black", color: "white", fontWeight: "bolder" }}>Read More</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default NewsItem
