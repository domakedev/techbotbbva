/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from "../../Types/index.js"

export default (state, action) => {
    switch (action.type) {

        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('tokencito', action.payload.tokencito)
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando:false
            }

        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.clear()
            return {
                ...state,
                token: null,
                usuario:null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
                
                
                
            }



        default:
            return;
    }
}
