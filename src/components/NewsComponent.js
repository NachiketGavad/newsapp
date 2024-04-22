
import React, { Component,useState } from 'react';
import NewsItem from './NewsItem';
import defaultImage from '../images/img1.jpg';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    // console.log("constructor from news");
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults : 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} News App`
  }
  
  // first key 760a91d6c4834dfbbea3bbd4c51f2950
  // spare key 0ad44c6984db4a36a9920b93476ee8e2
  async updateNow(){
    this.props.setProgress(0);
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress({progress:30});
    
    this.setState({loading:true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
  
    this.setState({ 
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
    this.props.setProgress(100);
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
  
  fetchMoreData = async () => {
    this.setState({ 
      page: this.state.page + 1
    });
  
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };
  

  render() {
    return (
      <div className={ `mb-3 bg-${this.props.mode} text-${this.props.mode==='dark'?'light':'dark'} border-${this.props.mode==='dark'?'light':'dark'} align-items-center container`} style={{ overflowX: 'hidden' }}>
  <h1 className='text-center mb-5'>{`News - Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`}</h1>
  {this.state.loading && <Spinner/>}
  {/* added infinite scroll */}
  <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length <this.state.totalResults}
    loader={<Spinner/>}
    // style={{ overflowX: 'hidden' }} 
  >
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-3 mx-2 my-2' key={element.url}>
                  <NewsItem title={!element.title?"":element.title.slice(0,80)} description={!element.description?"":element.description.slice(0,80)} urlToImage={!element.urlToImage?defaultImage:element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  mode={this.props.mode}/>
                </div>
        })}
      </div>
    </div>
  </InfiniteScroll>
  {/* <div className='container d-flex justify-content-between'>
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
  </div> */}
</div>

    )
  }
}
