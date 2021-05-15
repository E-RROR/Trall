import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import reducer from "../redux/Reducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage:storage,
  version:0,
  whitelist: ['reducer'],
  blacklist: ['loading']
};
const rootReducer = combineReducers({
  reducer,
});
export default persistReducer(persistConfig, rootReducer);
