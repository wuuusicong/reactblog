import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

const initialState = {
    card:[{
        name:"Profile",
        image:"Profile.jpg",
        description:"",
    },{
        name:"MachineLearning",
        image:"Profile.jpg",
        description:"",
    },{
        name:"Vis",
        image:"Profile.jpg",
        description:"",
    },{
        name:"Papers",
        image:"Profile.jpg",
        description:"",
    },{
        name:"blog",
        image:"Profile.jpg",
        description:"",
    },{
        name:"D3",
        image:"Profile.jpg",
        description:"",
    }]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const storeEnhancer = composeEnhancers(applyMiddleware(thunk))

export default createStore(initialState,storeEnhancer)
