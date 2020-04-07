import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import contactReducer from '../reducers/contactReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        contacts : contactReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore