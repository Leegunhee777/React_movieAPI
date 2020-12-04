import * as React from 'react';
import './Category.css';


import Product from '../../PopUp/Product';
import { getCategoryData } from '../../../utils/configFunction';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
           
            
            categorydata:'',
            isOpen:false
        };

        

       
        this.handleClick2=this.handleClick2.bind(this);
        this.toChange=this.toChange.bind(this);
     
   
    }
    
    

    handleClick2(e){
        this.toChange(true);
        this.setState({categorydata:getCategoryData(this.props.category, e.target.className)}); //클릭된놈의 id를 필터를 거쳐서 일치하는 id 놈 객체 반환
        console.log(getCategoryData(this.props.category, e.target.className));
    }

    toChange(isOpen){
        this.setState({isOpen});
    }
    render() {
        // console.log(this.props.category);
        // console.log(getCategoryData(this.props.category, 'tiger'));
        return (
           
            <div className='Cate_gory'>
               {
                typeof this.props.category === 'object'   //cate고리종류를 통제하기위한 변수임
                ?
                this.props.category.map((category) => {  //this.props.category로 오는값을 매개변수에 넣는것이기 때문에 괄호안속엔 category만 적어도딤
                    return (
                           <ul> <div className='image'>
                               <li> <img className={category.id} src={category.src[0]} onClick={this.handleClick2} />
                               <br/>
                                <span>id:{category.id}</span>
                                <br/>
                                <span>des:{category.des}</span>
                               
                                </li>
                             </div>  
                             </ul>
                           
                           )
                    })
                
                :
                null
            }
                

                

            <div>
            <Product
                tochange={this.toChange} //toChange함수를 tochange로 받고있음 오류 주의
                isOpen={this.state.isOpen}
                categorydata={this.state.categorydata}
            />
            </div>
           

            </div>
        );
    }
}
