import * as React from 'react';
import './Home.css';
import store, { history } from '@app/store';
import SearchBox from '@app/components/Home/SearchBox';
import SearchBoxImg from '@app/components/Home/SearchBoxImg';
import Category from '@app/components/Home/Category';
import { getCategory, test } from '../../utils/configFunction'; //유틸을 불러온다/
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            category:''
        };

        this.showImgSlide = this.showImgSlide.bind(this);
        this.gobasket = this.gobasket.bind(this);
    }

    showImgSlide(value) {
        console.log(value);
        this.setState({ search: value });
        this.setState({category:getCategory(value)});  //util에서 만든 함수값을 이용해 배열을 category에 저장함
         console.log(getCategory(value));
    }

    gobasket(){
        history.push('/basket');
      
    }

    render() {
       // console.log(test('fruit')); //원래는 이런용도 type값으로 뽑을경우fillter의 제대로된사용
        return (
            <div>
                <div  className='nav'>
                    <div className='nav-right'>
                        <button className='item-button'onClick={this.gobasket}>장바구니확인</button>
                   

                    
                        <button className='item-button'onClick={this.gobasket}>로그아웃</button>
                    </div>
                </div>
                
                <div className='homepage'>
                    <SearchBoxImg/>
                    <SearchBox showImgSlide={this.showImgSlide}/>
                    { this.state.search ==='animal'||'fruit' && <Category  category={this.state.category} />}
                </div>
            </div>
        );
    }
}
