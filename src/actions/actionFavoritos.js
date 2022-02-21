import  {  typesFavoritos } from '../types/types';
import {addDoc, collection, getDocs,deleteDoc,query,where,doc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const deleteFavoritos = (name) =>{ 
    return async(dispatch) =>{
        const estCollection = collection(db, "favoritos");
        const q = query(estCollection, where("name", "==", name));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((docu) => {
            console.log(docu.id);
            deleteDoc(doc(db,"favoritos",docu.id))
            .then(res => {
                dispatch(deleteSincrono(name))
            })
        })
    }
}

export const deleteSincrono = (name) => {
    return{
        type:typesFavoritos.delete,
        payload: name
    }
}
export const registerFavoritos = (name, category, img) => {
    return(dispatch) => {
        const agregarFavoritos = {
        name,
        category,
        img
    }
    addDoc(collection(db, "favoritos"), agregarFavoritos)
    .then(resp => {
        dispatch(registerFavoritosSincrono(agregarFavoritos));
    })
    .catch(error =>{
        console.log(error)
    })
    }
}


export const registerFavoritosSincrono = (favoritos) => {
    return{
        type:typesFavoritos.register,
        payload: favoritos
    }
}

export const list = (favoritos) => {
    return{
        type:typesFavoritos.list,
        payload: favoritos
    }
}

export const listFavoritos = () =>{
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "favoritos"));
        const favoritos = [];
        querySnapshot.forEach((doc) =>{
            favoritos.push({
                ...doc.data()
            })
        });
        dispatch(list(favoritos));
    }
}