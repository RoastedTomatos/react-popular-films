import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Film } from './../types/types'

export interface FilmsState {
  popularFilms: Film[]
}

const initialState: FilmsState = {
  popularFilms: [],
}

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setPopularFilms(state, action: PayloadAction<Film[]>) {
      state.popularFilms = action.payload
    },
    fetchPopularFilms() {

    }
  },
})

export const { setPopularFilms, fetchPopularFilms } = filmsSlice.actions
export default filmsSlice.reducer
