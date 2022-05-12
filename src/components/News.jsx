import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export default class News extends Component {
  
    static defaultProps={
      country:'in',
      pageSize:8,
      category:'general'
    }

    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading: true,
            page:1,
            totalArticles:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
    }
    
     capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }

   async componentDidMount(){
     this.props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      this.props.setProgress(30);
      let parsedData=await data.json();
      this.props.setProgress(70);
      // console.log(parsedData);
      this.setState({articles:parsedData.articles,
        totalArticles:parsedData.totalResults,
        loading:false,
      })
      this.props.setProgress(100);
    }

     handleNextClick=async ()=>{
      //  console.log("next");
      //  console.log(this.state.page+1);
      //  console.log(Math.ceil(this.state.totalArticles/20));
       if(!(this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)))
       {
        
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2eb740f74154fba830d0a3ee759aea3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data=await fetch(url);
          let parsedData=await data.json();
          // this.setState({loading:false});
            this.setState({page:this.state.page+1,
              articles:parsedData.articles,
              loading:false,
              totalArticles:0
            })
       }
    
    }
    handlePrevClick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2eb740f74154fba830d0a3ee759aea3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json();
        this.setState({page:this.state.page-1,
          articles:parsedData.articles
        })
    }
    fetchMoreData = async () => {
  
        this.setState({
          page:this.state.page+1
        });
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data=await fetch(url);
          let parsedData=await data.json();
          // this.setState({loading:false});
            this.setState({
              articles:this.state.articles.concat(parsedData.articles),
              loading:false,
            })
      
    };

  render() {
    return (
      <>
           <h1 className="text-center">NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {/* <h2>NewsMonkey - Top Headlines</h2> */}   
          {/* {this.state.loading &&   <Spinner />} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalArticles}
          loader={<Spinner/>}
          >
          <div className="container">
          <div className="row">

          {/* this is without infinite scroll {!this.state.loading && this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://images.cnbctv18.com/wp-content/uploads/2021/06/hdfcbank_online1-1019x573.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
          })} */}
          
           {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://images.cnbctv18.com/wp-content/uploads/2021/06/hdfcbank_online1-1019x573.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
          })}
          </div>
          </div>
          </InfiniteScroll>
          {/* as it is not needed in infinite <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> next 	&rarr;</button>
          </div> */}
      </>
    )
  }
}


//Your API key is: b2eb740f74154fba830d0a3ee759aea3