import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Item {
  id: number
  name: string;
  description: string;
}

type ItemWithoutId = Omit<Item, 'id'>;

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    itemAdded(state, action: PayloadAction<ItemWithoutId>) {
      const lastId = state.items.length === 0 ? 0 : state.items[state.items.length - 1].id;

      state.items.push({ ...action.payload, id: lastId });
    },
    itemDeleted(state, action: PayloadAction<Item>) {
      const itemIndex = state.items.findIndex((e) => e.id === action.payload.id);

      if (itemIndex > -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    arrayReseted(state) {
      state.items.splice(0, state.items.length);
    },
  },
});

export const { itemAdded, itemDeleted, arrayReseted } = itemSlice.actions;
export default itemSlice.reducer;
