import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import {Category} from '../../models/Category';
import {Jewel} from '../../models/Jewel';

export interface JewelrySlice {
  categories: Category[];
  jewels: Jewel[];
  bestSellers: Jewel[];
}

const initialState: JewelrySlice = {
  categories: [],
  jewels: [],
  bestSellers: [],
};

export const JewelrySlice = createSlice({
  name: 'jewelry',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setJewels: (state, action) => {
      state.jewels = action.payload;
    },
    setBestSellers: (state, action) => {
      state.bestSellers = action.payload;
    },
  },
});

export const {setCategories, setJewels, setBestSellers} = JewelrySlice.actions;

export const jewelrySelector = (state: RootState) => state.jewelry;
export const categoriesSelector = (state: RootState) => jewelrySelector(state).categories;
export const jewelsSelector = (state: RootState) => jewelrySelector(state).jewels;
export const bestSellersSelector = (state: RootState) => jewelrySelector(state).bestSellers;
export const typeSelector = (state: RootState, type: string) => jewelsSelector(state).filter((jewel) => jewel.type === type);

export default JewelrySlice.reducer;
