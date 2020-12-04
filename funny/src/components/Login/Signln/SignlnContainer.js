import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Signln from './Signln';

/**
 * mapStateToProps is word for promise
 * this function will connect state in redux to component props
 * @param {*} state state variable in reudx
 */
const mapStateToProps = (state) => ({
    id: state.appConfig.userStatus.id,
    pw: state.appConfig.userStatus.pw,
});

/**
 * mapDispatchToProps is word for promise
 * this function will connect action in redux to component props
 * @param {*} state state variable in reudx
 */
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Signln);
