import {configureStore} from '@reduxjs/toolkit'

// esta es la unica store que debemos tener en el proyecto
// devuelve un objeto
// aca ponemos luego los reducers que vamos agregando
// la exportamos porque la vamos a usar dentro del proveedor
export default configureStore({
    reducer: {},
})