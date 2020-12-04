import * as React from 'react';
import './SignUp.css';
//import SearchBox from '../../components';//질문7: 이딴식으로 쓰면 에러뜸??
//import {checkUser} from '../../utils'; //여기서 존나에러뜸!!!!!!!!!!!!!!!

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ID:'',
            PASSWORD:'',
            EMAIL:'',
            NAME:''
        };

        

     this.handdleId= this.handdleId.bind(this);
     this.handlePw= this.handlePw.bind(this);
     this.handleEmail= this.handleEmail.bind(this);
     this.handleName= this.handleName.bind(this);
     this.handleClick1= this.handleClick1.bind(this);
    }
     
    

    handdleId(e){  //id를 저장하는새끼
        this.setState({
            ID:e.target.value
        });
    }

    handlePw(e){  //id를 저장하는새끼
        this.setState({
            PASSWORD:e.target.value
        });
    }

    handleEmail(e){  //id를 저장하는새끼
        this.setState({
            EMAIL:e.target.value
        });
    }

    handleName(e){  //id를 저장하는새끼
        this.setState({
            NAME:e.target.value
        });
    }

    handleClick1(){
        if(this.state.ID !== '' && this.state.PASSWORD !== '' && this.state.EMAIL !== '' && this.state.NAME !=='')
        {
         this.props.updateUserData({
              id:this.state.ID,
              pw:this.state.PASSWORD,
              email:this.state.EMAIL,
              name:this.state.NAME
             });
            
             this.props.tochange(false);
         }
    }

    
    
    render() {

        return (
            <div style={{
                display: this.props.isOpen   ?  true: 'none',
                backgroundColor:'black',
                height:'300px',
                width:'300px',
                marginLeft:'160px',
                paddingTop:'5px',
                textAlign:'center',
                position: 'absolute',
                top: '0'

                }}>
            <div className='poptitle'>
                회원가입
            </div>
            <br/>
            <input
                type="text"
                name="id"
                placeholder="ID를 입력하시오"
                onChange={this.handdleId}
                />

                <br/>
                <input
                type="text"
                name="passwwwor"
                placeholder="Password를 입력하시오"
                onChange={this.handlePw}
                />
                   <br/>
                <input
                type="text"
                name="email"
                placeholder="Email을 입력하시오"
                onChange={this.handleEmail}
                />

              <br/> 
                <input
                type="text"
                name="name"
                placeholder="Name을 입력하시오"
                onChange={this.handleName}
                />      

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.handleClick1}>회원정보저장</button>
               

                

               
        </div>
        );
    }
}

export default SignUp;
