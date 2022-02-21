import { applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registroReducer } from '../reducers/registroReducer';
import { favoritosReducers} from '../reducers/favoritosReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login:loginReducer,
    registro: registroReducer,
    favoritos: favoritosReducers
})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);