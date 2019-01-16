import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'


//const middleware = [thunk]
const middleware = applyMiddleware(thunk, logger)

/*const store = createStore(
    rootReducer, middleware
)*/

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;