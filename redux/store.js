import {createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import budgetReducer from './budgetReducer'

const store = createStore(budgetReducer, composeWithDevTools())

export default store