import {CHECK_LOGIN} from "../../constants/index"

// Los reducers deben ser funciones puras
// es decir deben tener siempre el mismo resultado con 
// el mismo input
// Debido a este requerimiento no se pueden hacer llamadas
// a apis o bases de datos dentro de los reducers

const loginReducer = (state={}, action) => {
    switch (action.type){
        case CHECK_LOGIN:
            console.log(CHECK_LOGIN)
            return {...state, checked: true}
        default:
            return  {...state, checked: false}
    }
}

export default loginReducer
