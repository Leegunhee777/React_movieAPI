import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUp from './SignUp';

import { configActions as appConfig } from '@app/store/appConfig';
/**
 * mapStateToProps is word for promise
 * this function will connect state in redux to component props
 * @param {*} state state variable in reudx
 */
const mapStateToProps = (state) => ({
});

/**
 * mapDispatchToProps is word for promise
 * this function will connect action in redux to component props
 * @param {*} state state variable in reudx
 */
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUserData: appConfig.updateUser.updateUserData
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
//index.js에서 signup 컨테이너가(지금 이 소스) signup컴포넌트와 리덕스를 가지고있는데 , 이놈을(signup컨테이너) 호출해야 저둘을 호출하는거지 signup.jsx를 호출하는건 컴포넌트만 호출하는거라 리덕스연결이 안된거라 에러뜸
