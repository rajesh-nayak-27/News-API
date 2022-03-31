import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <div style={{ display: "flex", position: "absolute", justifyContent: "flex-end", right: "0" }}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem