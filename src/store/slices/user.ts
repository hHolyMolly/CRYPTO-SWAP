import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  telegramUserID: string;

  is_volume: boolean;
}

const volumeLocal: IUser['is_volume'] = JSON.parse(window.localStorage.getItem('volume'));

const initialState: IUser = {
  telegramUserID: null,

  is_volume: volumeLocal !== null ? volumeLocal : true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setVolume: (state, { payload }: PayloadAction<IUser['is_volume']>) => {
      state.is_volume = payload;

      window.localStorage.setItem('volume', String(payload));
    },
  },
});

export const { setVolume } = userSlice.actions;

export default userSlice.reducer;
