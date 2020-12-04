import * as React from 'react';
import Signln from './Signln';
import SignUp from './SignUp'
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen:false,
        };
        this.toChange=this.toChange.bind(this);
        
    }
    
 




    toChange(isOpen){
      this.setState({isOpen});  //isOpen: true로 할필요없음 애초에 저런식으로 넘기는 형태임
      
    }

    render() {
        return (
            <div>
                <Signln
                    tochange={this.toChange}
                />
            
                <SignUp
                    tochange={this.toChange}
                    isOpen={this.state.isOpen}
                />
            </div>
        );
    }
}

export default Login;
