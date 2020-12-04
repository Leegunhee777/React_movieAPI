import * as React from 'react';

class basket extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
           
        };
        
    }
    
    
    componentWillMount(){
      //  this.setState({BASKET:this.props.basket}); reder되기전 값을 셋팅하는 방법중하나가 될수 잇음
    }
    render() {
        console.log(this.props.basket);
        
        return (
            <div>
               <button> 가나다</button>
               {
                typeof this.props.basket=== 'object'   //cate고리종류를 통제하기위한 변수임
                ?
                this.props.basket.map((category) => {  //this.props.category로 오는값을 매개변수에 넣는것이기 때문에 괄호안속엔 category만 적어도딤
                    return (
                            <div>
                                <img src={category.src[0]}  />
                                <br/>
                                <span>id:{category.id}</span>
                                <br/>
                                <span>des:{category.des}</span>
                             </div>  
                           
                           )
                    })
                
                :
                null
            }
            </div>
        );
    }
}

export default basket;
