import * as React from 'react';
import kakao1 from '../../../media/imgSlide/kakao-1.jpg';


let reftest = 0;
class Product extends React.Component{
    constructor(props) {
        super(props);

        
        this.popUpClick= this.popUpClick.bind(this);
        this.test= this.test.bind(this);
        this.reftest = this.reftest.bind(this);
    }



    popUpClick(){
        this.props.tochange(false);  //props는 일방적으로 값을 지정당하는대 함수면 이런식으로 값을 바꿀수있음??ㅇㅇ바꿀수있음
    }

    test() {
        // console.log(this.props.categorydata);
        const test = this.props.basket;//리듀서를 안거치고 basket을 저장할수 있는 야매방법!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        test.push(this.props.categorydata);
        this.props.tochange(false);  //props는 일방적으로 값을 지정당하는대 함수면 이런식으로 값을 바꿀수있음??ㅇㅇ
        // this.props.updateUserBasket(test)
    }

    componentDidUpdate() {
        console.log(this.props.basket);
        
    }

    reftest() {  //보통 이미지가 클릭했을떄가 e.target으로 그놈에 대한 컨트롤이 가능한데 이미지를 클릭했을때 다른 target에 변화를 적용을 시킬수도있음 !!!!!!!!!!!!!!!!!!1
        console.log(reftest);
         reftest.style.color = 'red';
        
    }

    render(){

        return(
            <div style={{
                display: this.props.isOpen   ?  true: 'none',
                backgroundColor:'black',
                width:'40%',
                height:'150%',
                position: 'absolute',
                top: '0',
                
                }}>
             <img src ={kakao1} onClick={this.reftest}/>  
            
             <span  style={{ color:'white'}}  ref={(ref) => {reftest = ref}}>귀여운 곰인형!</span> 
 
             
             { typeof this.props.categorydata === 'object'   //cate고리종류를 통제하기위한 변수임
                ?
                    this.props.categorydata.src.map((src) => {  //src를 이미map하기때문에  src.map((src)=>괄호안의 src는 큰의미없음)
                        return (
                            <div>
                                <img src={src}/>
                               
                            </div>
                           
                        )
                    })

                    :
                    null
                }
             <br/>
             <button onClick ={this.popUpClick}>상세정보나가기</button>
             <button onClick ={this.test}>장바구니</button>
            </div>

        )
    }
}

export default Product;