import * as React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
          
        };
    }
    render() {
        
        return (
            <div className="Movie"> {/*1개의 포스터 안에 image랑 text 즉 두개의컬럼(열)이 필요함*/ }
                <div className="Movie_Columns">
                    <MoviePoster poster = {this.props.poster} alt={this.props.title}/>
                </div>

                <div className="Movie_Columns">
                    <h1>{this.props.title}</h1>
                 
                    <div className="Movie_Genres"  >
                    {this.props.genres.map((c) =>  //아마 이런식으로 mpa돌리면 adventure Drama...등등이 줄바꿈되서 나올거임 허나 안에뿌려지는 새끼를 span으로 조지면 가로로 선다MovieGenre 컴포넌트참조
                      <MovieGenre genre={c}/> )}
                    </div>
                 
                    <div className="Movie_Synopsis">
                       <LinesEllipsis  //이 컴포넌트를 쓰면 text로 존나게긴 String을 받고 maxLine 3으로 설정 나머지는 ...으로 처리할 수 있음
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                      />  
                    </div>
                </div>
           </div>
        );
    }
}

class MoviePoster extends  React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
        };
    }
    render() {
        
        return (
           
        <div>
            <img src = {this.props.poster}  title={this.props.alt} className="Movie_Poster"/> {/*image 에다가 title을 설정해놓으면 image위에 마우스 커서올릴때 title에 해당하는 text가 보여짐*/}
            </div>
        );
    }
}

class MovieGenre extends  React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
        };
    }
    render() {
        
        return (
           
            
        <span className="Movie_Genre">{this.props.genre}</span>  /*return 안이라고 div로 묶지마라(묶으면 병렬로 안선다) 컴포넌트없으니 단순히 text만 나열하는거니 span으로 조지면 병렬로 선다*/
            
        );
    }
}

