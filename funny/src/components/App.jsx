import * as React from 'react';
import Movie from './Movie';




class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           
           /* greeting: 'hello', // state값이 업데이트 될 때마다 render 전체가 작동함
            movies :[
                {   id:1,
                    title:"Matrix",
                    poster: "https://placeimg.com/64/64/1"
                },
                {
                    id:2,
                    title:"Full Metal jacket",
                    poster: "https://placeimg.com/64/64/2"
                },
                {
                    id:3,
                    title:"Oldboy",
                    poster: "https://placeimg.com/64/64/3"
                },
                {
                    id:4,
                    title:"Star Wars",
                    poster: "https://placeimg.com/64/64/4"
                }
            ]
            */
        };
    }
/*
    componentDidMount(){
        setTimeout( () => {
            this.setState({greeting : 'hello agina'})
        },5000)  //render가 다 된후에 greeting에있던 hello가 5초 뒤에 hello again으로 바뀐다

        setTimeout( () =>{
            this.setState({
                movies: [  //이전영화 리스트를 그대로 두고, 한개의 영화를 추가 한다는 뜻임 (스크롤끝으로 내려가면 data20개를 추가하는식으로 무한 스크롤링을 구현할 수 있음 (페이스북이 이런식으로 구현되있음))
                    ...this.state.movies, //...this.state.movies를 적지 않으면 기존의 영화정보들은 날아가고 Transpotting만 보여지게됨
                    {
                        title: 'Transpotting',
                        poster:"https://placeimg.com/64/64/5"
                    }
                ]
            })
        }, 1000)
    }
*/
componentDidMount(){
   
    setTimeout( () =>{
        this.setState({ //setState로 movies변수는 state변수로서 배열 데이터를 가지게됨
            movies: [  
                {   id:1,
                    title:"Matrix",
                    poster: "https://placeimg.com/64/64/1"
                },
                {
                    id:2,
                    title:"Full Metal jacket",
                    poster: "https://placeimg.com/64/64/2"
                },
                {
                    id:3,
                    title:"Oldboy",
                    poster: "https://placeimg.com/64/64/3"
                },
                {
                    id:4,
                    title:"Star Wars",
                    poster: "https://placeimg.com/64/64/4"
                }
            ]
        })
    }, 3000)
}
    _renderMovies = () => { //movies라는 변수에 data를 저장하는것임
       const moviess = this.state.movies.map((c) => {            //한마디로 const moviess 변수에 [<Movie.../>,<Movie.../>,..  ] array항목이  들어가는거임
            return <Movie title ={c.title} poster ={c.poster} key = {c.id}/>
        })
        return moviess //함수안에서 map을 사용할때 return을 두번 쓰는 구조로 써줘야함
    }

    render() {
        return (
           <div>
               {this.state.movies? this._renderMovies() : ' Loading'} {/*처음에 this.state.movies가 비어있다가 고로 Loading으로 표시됨, 3초뒤에 데이터가 들어온다..들어오고 나서 this.state.movies가 비어있지않으니 함수가 실행되면서 map이 실행된다*/}
             </div>
              
             /* {this.state.greeting}
         { this.state.movies.map( c => { 
            return <Movie title = {c.title} poster = {c.poster} key={c.id}/> //map 돌릴때 key설정 해줘야함 근데 key는 unique 한 값으로 설정해줘야함
         })}
      
        */
            
        );
    }
}

export default App;
