import * as React from 'react';
import './app.css';
import Movie from './Movie';
import 'babel-polyfill';
import './app';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:''
        };
      //  this._renderMovies=this._renderMovies.bind(this);
       // this._getMovies=this._getMovies.bind(this);
        //this._callApi=this._callApi.bind(this);
    }

componentDidMount(){
   this._getMovies()
    /*
   fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') // 1.리엑트와 작업이 간편하다 ajax의 fetch를 쓰면 서버의 url을 타고가서 해당 data들을 가져올수있음
   .then(response => response.json())//console.log(response))                    //didmount, fetch 다음엔?? 위의 작업이 끝나면 성공적 수행이아니라 그냥 작업이 완료되면, then(어떠한작업을 명시할 수 있다)을 불러온다 그다음엔 catch()
    .then(json=>console.log(json))                                                            //then() 은 1개의 attribute만 준다 ,그것은 오브젝트이다 즉, fetch 의 결과물 그 이름을 response 라 하자 (photato라고 해도됨 니마음임)
                                                               //response에 대한 consle.log를 확인해보면ok:ture request가 성공적으로 갔다는말
                                                            //status:200 정상이라는말임(헌데 fetch를 통해 넘어온 data는 스트림형태로 이진법으로 되있기 때문에 우리가인식할수 있는 json형태로의 변환이필요함 response => response.json())
   .catch(err => console.log(err))                          // 위의 과정중에 err가 있으면 잡아서 나에게 보여줘 라는말
                                                            //허나 우리는 json을 콘솔로그 찍는게 목적이아님(***고로이부분은잠시주석처리***) ,영화데이터를 가져와서 setstate해야함 
*/
 }
   
_renderMovies = () => { //movies라는 변수에 data를 저장하는것임
       const moviess = this.state.movies.map((c) => {            //한마디로 const moviess 변수에 [<Movie.../>,<Movie.../>,..  ] array항목이  들어가는거임
        //console.log(c)    //영화 하나하나의 객체가 C 임
        return <Movie 
        title ={c.title_english} 
        poster ={c.medium_cover_image} 
        key = {c.id} 
        genres={c.genres}
        synopsis={c.synopsis}
        />
        })
        return moviess //함수안에서 map을 사용할때 return을 두번 쓰는 구조로 써줘야함
    }

 _getMovies = async () => {   //비동기함수 _getMovies 선언 ,async를 안쓰면 await가 작동을안함
    const movies = await this._callApi()   //_callApi()함수가 작업끝나길기다렸다가(await)..... (return값을 반환하기를 기다림)
    console.log(movies)
    this.setState({movies:movies})
}

_callApi = () => {  //call api는 fetch promise 발동
   return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json=>json.data.movies) // 스트림(이진법)에서 json형식으로 바뀐 data에서 우리가 필요한건 movies이기때문에 저런식으로써야함 json.data.movies는 F12를통해 json객체 형식을보면알수있다.
    .catch(err => console.log(err))    //기본적으로 =>은 return의 의미를 내포하고있다. 
}
  
    render() {
        return (
           <div className={this.state.movies ? "App" : "App--loading"}>  {/*state.movies에 값이 있냐없냐로 css를 다르게 적용하는 방법임 */}
               {this.state.movies? this._renderMovies() : ' Loading'} {/*처음에 this.state.movies가 비어있다가 고로 Loading으로 표시됨, 3초뒤에 데이터가 들어온다..들어오고 나서 this.state.movies가 비어있지않으니 함수가 실행되면서 map이 실행된다*/}
             </div>
            
            
        );
    }
}

export default App;
