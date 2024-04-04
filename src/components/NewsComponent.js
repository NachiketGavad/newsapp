
import React, { Component,useState } from 'react';
import NewsItem from './NewsItem';
import defaultImage from '../images/img1.jpg';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  myarticles = []

  constructor(){
    super();
    console.log("constructor from news");
    this.state = {
      articles : this.myarticles,
      loading : false,
      page : 1
    }
  }
  
  async updateNow(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=760a91d6c4834dfbbea3bbd4c51f2950&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true });
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({ 
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }
  
  async componentDidMount() {
    this.setState({ 
      page :1
    });
    this.updateNow();
  }


  handlePrevClick = async ()=>{
    this.setState({ 
      page :this.state.page-1
    });
    this.updateNow();
  }

  handleNextClick = async ()=>{
    this.setState({ 
      page :this.state.page+1
    });
    this.updateNow();
  }
  
  render() {
    return (
      <div className={ `mb-3 bg-${this.props.mode} text-${this.props.mode==='dark'?'light':'dark'} border-${this.props.mode==='dark'?'light':'dark'} align-items-center container`} >
      <h1 className='text-center mb-5'>News - Top Headlines </h1>
        {this.state.loading && <Spinner/>}
        <div className='row d-flex justify-content-center'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-3 mx-2 my-2' key={element.url}>
                    <NewsItem title={!element.title?"":element.title.slice(0,80)} description={!element.description?"":element.description.slice(0,80)} urlToImage={!element.urlToImage?defaultImage:element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  mode={this.props.mode}/>
                  </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
