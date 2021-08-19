import { switchCase } from "babel-types"
import {CHECK_LOGIN} from "../../constants/index"

const loginReducer = (state={}, action) => {
    switch (action.type){
        case CHECK_LOGIN:
            return {...state, checked: true}
        default:
            return  {...state, checked: false}
    }
}

export default loginReducer
