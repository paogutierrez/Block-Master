import { getAuth, signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { google } from '../firebase/firebaseConfig';
import  { types } from '../types/types';

export const loginEmailPassword = (email,password) => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user}) =>{
            dispatch(
                loginSincrono(user.uid,user.displayName)
                )
                console.log('Bienvenid@');
        })
        .catch(e => {
            console.log(e);
            console.log('el usuario no existe')
        })
    }
}

export const loginGoogleAsincrono = () => {
    return(dispatch) => {
        const auth = getAuth()  //complementa a signInWithPopup
        signInWithPopup(auth,google) 
            .then(({user})=> {
                dispatch(loginSincrono(user.uid,user.displayName))//con esta linea yo ya puedo ver desde redux la informacion
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const loginSincrono = (id, displayName) => {

    return{
        type:types.login,
        payload:{
            id,
            displayName
        }
    }
}