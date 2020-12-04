import * as React from 'react';



export default class Movie extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
          
        };
    }
    render() {
        
        return (
            <div>
           <MoviePoster poster = {this.props.poster}/>
          
           <h1>{this.props.title}</h1>
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
            <img src = {this.props.poster}/>
            </div>
        );
    }
}
