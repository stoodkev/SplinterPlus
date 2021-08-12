import reducers from '@popup/reducers';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['shouldClaimSps'], // only navigation will be persisted
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
