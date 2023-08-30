import { put, takeLatest } from 'redux-saga/effects'
import { setPopularFilms } from './filmsSlice'

function* fetchPopularFilms() {
  try {
    const mockPopularFilms = [
      {id: 1, title: 'Film 1'},
      {id: 2, title: 'Film 2'},
      {id: 3, title: 'Film 3'}
    ]
    yield put(setPopularFilms(mockPopularFilms))
  } catch (error) {

  }
}

export function* watchFilmsSaga() {
  yield takeLatest('films/fetchPopularFilms', fetchPopularFilms)
}