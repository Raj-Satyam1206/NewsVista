import React from 'react'

const NewsItem = (props)=> {
        const { title, description, imageUrl, newsUrl, author, date, source, mode } = props;
        return (
            <div className="my-3">
                <div className="card" style={{backgroundColor : mode==='dark'?'black':'white'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{color : mode==='dark'?'white':'black'}}>{title}  </h5>
                        <p className="card-text" style={{color : mode==='dark'?'white':'black'}}>{description}</p>
                        <p className="card-text" style={{color : mode==='dark'?'white':'black'}}><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm ${mode === "dark" ? "btn-light" : "btn-dark"}`}>Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
