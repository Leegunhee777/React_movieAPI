import * as React from 'react';
import store, { history } from '@app/store';
import lo from '../../../media/lo.png';
import './Signln.css';


class Signln extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            ID:'',
            PASSWORD:'',
            
        };
        
        this.handleClick2= this.handleClick2.bind(this);
        this.handleClick1= this.handleClick1.bind(this);
        this.handleChange1= this.handleChange1.bind(this);
        this.handleChange2= this.handleChange2.bind(this);
        
    }
   

    handleChange1(e){  //id를 저장하는새끼
        this.setState({
            ID:e.target.value
        });
    }

    handleChange2(e){  //id를 저장하는새끼
        this.setState({
            PASSWORD:e.target.value
        });
    }

    handleClick2(){
        this.props.tochange(true);
    }
    
    handleClick1(){
        
        if(this.state.ID == this.props.id && this.state.PASSWORD == this.props.pw){
            history.push('/home');
            console.log('로그인성공');
            
        }
    }
     
    render() {

        return (
            <div> 
                <div className='title'>
                    <img src ={lo} className='qwe'/>
                    <br/>
                    로그인화면
                </div>
                <div className='asd'>
                   
                    <input 
                    type="text"
                    name="idd"
                    placeholder="ID를 입력하시오"
                    onChange={this.handleChange1}
                    />
                    <br/>
                    
                    <input 
                    type="text"
                    name="passwwwor"
                    placeholder="Password를 입력하시오"
                    onChange={this.handleChange2}
                   />
                  <br/>
                <button onClick={this.handleClick1}>로그인</button>
                <button onClick={this.handleClick2}>회원가입</button>
                <br/>
                 </div>
                

               
        </div>
        );
    }
}

export default Signln;
