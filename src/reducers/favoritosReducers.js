import { typesFavoritos} from '../types/types';

const initialState = {
    favoritos:[]
}


export const favoritosReducers = (state = initialState, action) => {
switch (action.type) {
    case typesFavoritos.register:
        return{
            favoritos: [...state.favoritos,action.payload]
        }
        case typesFavoritos.list:
            return{
                favoritos:[...action.payload]
            }
        case typesFavoritos.delete:
            return{
                favoritos: state.favoritos.filter(est => est.name !== action.payload)
            }
        default:
            return state;
}
}