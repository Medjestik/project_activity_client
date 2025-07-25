import { combineSlices } from '@reduxjs/toolkit';
import { userSlice } from './user/reducer';
import { applicationSlice } from './application/reducer';

export const rootReducer = combineSlices(userSlice, applicationSlice);
