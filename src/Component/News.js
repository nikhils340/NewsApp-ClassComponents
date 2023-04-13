import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    };

    CapitalizeFirstLettertoUpper = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // static PropTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }
    constructor(props) {
        super(props);
        this.state = {                // INITIALIZING LIKE THE C++ CONSTRUCTORS
            articles: [],
            loading: true,
            page: 1,  // by default this value will be passed
            totalResults: 0,

        }
        document.title = `${this.CapitalizeFirstLettertoUpper(this.props.category)}-NewsApp`;
    }
    async updateNews(){
        this.props.setProgress(10);  //initial progress
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;   // 20 news will display on the single page
        let data = await fetch(url);
        this.props.setProgress(30);  //after fetching data progress is given
        let parsedData = await data.json()
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9cd912be1e24e80aa3a97e359271389&page=1&pageSize=${this.props.pageSize}`;   // 20 news will display on the single page
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData); 
        // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
        this.updateNews();
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9cd912be1e24e80aa3a97e359271389&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);  
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();

    }

    handleNextClick = async () => {
        //     console.log("Next"); 
        //     if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        //     }
        //     else{
        //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9cd912be1e24e80aa3a97e359271389&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //         let data = await fetch(url);
        //         let parsedData = await data.json()
        //         console.log(parsedData);  
        //         this.setState({
        //             page: this.state.page + 1,
        //             articles: parsedData.articles
        //         })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        // this.updateNews();
        //data to be copied from the updateNews() function
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;   // 20 news will display on the single page
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
    };

    render() {
        return (
            <>
                <h1 className="my-3 text-center" style={{ margin: "40px 0px", color: "rgb(227, 13, 152)", fontWeight: "bolder", textDecoration: "underline", textDecorationColor: "cyan" }} >NewsMonkey - Top {this.CapitalizeFirstLettertoUpper(this.props.category)} Headlines</h1>
                {/* <Spinner/> */}
                {/* {this.state.Loading && <spinner/>}  if loading is true then show the spinner otherwise */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<h4></h4>}
                >
                    <div className='container'>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>


            </>
        )
    }
}

export default News
