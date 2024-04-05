import { put, call, takeLatest } from 'redux-saga/effects';
import { setPopularFilms, fetchPopularFilmsFailure } from './filmsSlice';
import { fetchPopularFilms } from '../api/movieDBAPI';
import { Film } from '../types/types';

function* fetchPopularFilmsSaga() {
  try {
    const response: { results: Film[] } = yield call(fetchPopularFilms);

    yield put(setPopularFilms(response.results));
  } catch (error: any) {
    yield put(fetchPopularFilmsFailure(error.message));
  }
}

export function* watchFilmsSaga() {
  yield takeLatest('films/fetchPopularFilms', fetchPopularFilmsSaga);
}
