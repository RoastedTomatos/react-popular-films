import { configureStore } from "@reduxjs/toolkit";
import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import filmsReducer from './filmsSlice'

function* rootSaga() {
  yield all([])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    films: filmsReducer
  },
  middleware: [sagaMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga)