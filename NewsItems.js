import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {name,description,origin,imageUrl,vetstreet} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://media.istockphoto.com/id/1435010849/photo/labrador-retriever-dog-panting-and-ginger-cat-sitting-in-front-of-dark-yellow-background.jpg?s=612x612&w=0&k=20&c=obpeW_Aw7cIpQ8SfVHX9lMwLeLa00W1qmSFcOTVMEZ4=":imageUrl}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{origin}</p>
            <a href={vetstreet} className="btn btn-primary">ADDOPT</a>
            </div>
        </div>
      </div>
    )
  }
}
export default NewsItems