
import React, { Component } from 'react'
export class NewsItem extends Component {

 

  render() {
      let {title,description,imageurl,newsUrl }=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>{this.props.source}<span className='visually-hidden'>unread message</span></span>
          </div>
        
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted"></small>{this.props.author===null?"Unknown":this.props.author} {new Date(this.props.date).toGMTString()}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
