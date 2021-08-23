import {
    CHECK_LOGIN
} from '../../constants/index'

function checkLogin() {
    return {
        type: CHECK_LOGIN,
        payload: ""
    }
}

export default checkLogin