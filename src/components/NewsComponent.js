
import React, { Component,useState } from 'react';
import NewsItem from './NewsItem';
import defaultImage from '../images/img1.jpg'

export default class NewsComponent extends Component {
  
  myarticles = [
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters.com",
        "title": "Helicopter rescues Taiwan miners as earthquake injuries top 1000 - Reuters.com",
        "description": null,
        "url": "https://www.reuters.com/world/asia-pacific/taiwan-earthquake-injuries-climb-above-1000-hotel-workers-still-missing-2024-04-04/",
        "urlToImage": null,
        "publishedAt": "2024-04-04T07:15:33Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Elliot Smith",
        "title": "Russia-Ukraine war live updates: Russian drone attack kills rescue workers in Kharkiv; Moscow says NATO dialog at 'zero' but does not seek conflict - CNBC",
        "description": "Russian drone strikes on Kharkiv killed at least four people, including three rescue workers, and injured 12 more, according to Ukrainian officials.",
        "url": "https://www.cnbc.com/2024/04/04/russia-ukraine-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107394172-1711629956795-gettyimages-2117846940-dsc01108_suspilne_27032024_kharkiv_dt.jpeg?v=1712209357&w=1920&h=1080",
        "publishedAt": "2024-04-04T07:02:00Z",
        "content": "Russian drone strikes on Kharkiv early Friday morning killed at least four people, including three rescue workers, and injured 12 more, according to Ukrainian officials.\r\nIn a post on the Telegram me… [+788 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Des Bieler",
        "title": "Rangers-Devils brawl results in eight ejections two seconds into game - The Washington Post",
        "description": "New York’s Matt Rempe and New Jersey’s Kurtis MacDermid could have been expected to square off right away, but all 10 skaters decided to drop the gloves.",
        "url": "https://www.washingtonpost.com/sports/2024/04/03/rangers-devils-brawl/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GUNP4IHH6WHPFJTBJZTYR3N6CU_size-normalized.jpg&w=1440",
        "publishedAt": "2024-04-04T04:26:11Z",
        "content": "When the Rangers Matt Rempe and the Devils Kurtis MacDermid were listed as starters for New Yorks game Wednesday night against visiting New Jersey, it was reasonable to suspect and expect that the to… [+4809 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Pig kidney transplant patient leaves hospital - BBC.com",
        "description": "The procedure was hailed as a historic step as doctors tackle a widespread organ donor shortage.",
        "url": "https://www.bbc.com/news/world-us-canada-68710229",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10B72/production/_133066486_slayman-1.png",
        "publishedAt": "2024-04-04T03:40:39Z",
        "content": null
    },
    {
        "source": {
            "id": "espn",
            "name": "ESPN"
        },
        "author": null,
        "title": "Pistons reserve Malachi Flynn puts up 50 in loss to Hawks - ESPN",
        "description": "Detroit point guard Malachi Flynn had just the third game of 50 points or more by a player off the bench since starters were first tracked in 1970-71.",
        "url": "https://www.espn.com/nba/story/_/id/39871368/pistons-reserve-malachi-flynn-puts-50-loss-hawks",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0404%2Fr1314002_1296x729_16%2D9.jpg",
        "publishedAt": "2024-04-04T03:19:55Z",
        "content": "Detroit Pistons reserve point guard Malachi Flynn gave a rare 50-point performance in Wednesday night's 121-113 loss to the Atlanta Hawks.\r\nIt was just the third game of 50 points or more by a player… [+1867 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "BRETT MARTEL",
        "title": "LSU star Angel Reese declares for WNBA draft via Vogue photo shoot, says 'I didn't want to be basic' - The Associated Press",
        "description": "Bayou Barbie is WNBA bound. LSU star Angel Reese formally declared for the WNBA draft less than two days after the Tigers’ season ended with a loss to Caitlin Clark and Iowa in the Elite Eight round of the women’s NCAA Tournament. Reese made her announcement …",
        "url": "https://apnews.com/article/angel-reese-lsu-wnba-draft-814fd88e955d4860acc252e161f0d670",
        "urlToImage": "https://dims.apnews.com/dims4/default/5e6b64c/2147483647/strip/true/crop/3965x2230+0+206/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbc%2Fd7%2Fb7ab8aace26d4a903d314b6ee8e0%2F8b145a5dc8054c5facb76d4e0e857a54",
        "publishedAt": "2024-04-04T03:18:00Z",
        "content": "Bayou Barbie is WNBA bound.\r\nLSU star Angel Reese, who is known for her eyelash extensions, painted fingernails and ferocious play in the paint, formally declared for the WNBA draft on Wednesday. Her… [+5432 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Lauren del Valle, Christina Maxouris",
        "title": "Prosecutors say school shooter Ethan Crumbley’s parents show ‘chilling lack of remorse’ after manslaughter convictions - CNN",
        "description": "In newly filed court documents, Michigan prosecutors are asking a judge to sentence the parents of school shooter Ethan Crumbley to at least 10 years in prison, alleging they have both showed a “chilling lack of remorse” after they were convicted for involunt…",
        "url": "https://www.cnn.com/2024/04/03/us/crumbley-parents-michigan-shooting-prosecutors-sentence/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240315-01-crumbley-parents-split.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-04T03:10:00Z",
        "content": "In newly filed court documents, Michigan prosecutors are asking a judge to sentence the parents of school shooter Ethan Crumbley to at least 10 years in prison, alleging they have both showed a chill… [+5341 chars]"
    }
  ]
  constructor(){
    super();
    console.log("constructor from news");
    this.state = {
      articles : this.myarticles,
      loading : false
    }
  }
  render() {
    return (
      <div className={ `mb-3 bg-${this.props.mode} text-${this.props.mode==='dark'?'light':'dark'} border-${this.props.mode==='dark'?'light':'dark'} container`} >
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-3 mx-2 my-2' key={element.url}>
                    <NewsItem title={!element.title?"Mytitle":element.title.slice(0,80)} description={!element.description?"MyDescription":element.description.slice(0,80)} urlToImage={!element.urlToImage?defaultImage:element.urlToImage} url={element.url} mode={this.props.mode}/>
                  </div>
          })}
        </div>
      </div>
    )
  }
}
