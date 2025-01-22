import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BreedEntity} from '../../domain/entities/breed_entity';
import {BreedsRepository} from '../../infrastructure/repositories/breeds_repository';

interface BreedsState {
  breeds: BreedEntity[];
  loading: boolean;
  error: string | null;
}
const initialState: BreedsState = {
  breeds: [],
  loading: false,
  error: null,
};
const breedsRepository = new BreedsRepository();
export const fetchBreeds = createAsyncThunk('breeds/getBreeds', async () => {
  return await breedsRepository.getBreeds();
});
const breedsSlice = createSlice({
  reducers: {},
  name: 'breeds',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBreeds.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchBreeds.fulfilled, (state, action) => {
      state.loading = false;
      state.breeds = action.payload;
    });
    builder.addCase(fetchBreeds.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ha ocurrido un error';
    });
  },
});
export default breedsSlice.reducer;
