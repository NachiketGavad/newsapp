import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, urlToImage,url,author, date,source} = this.props
    return (
      <div>
        <div className={`card bg-${this.props.mode} text-${this.props.mode==='dark'?'light':'dark'}`}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
        {source}
        <span className="visually-hidden">unread messages</span>
      </span>
          <img src={urlToImage} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary">Check News</a>
            <div className="card-footer my-1">
              <small className={ `text-body-${this.props.mode==='dark'?'light':'dark'} `}>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
