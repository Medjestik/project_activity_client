import type { IApplication, INewAppRequest, INewAppResponse } from './types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { newApplication, getApplications } from '../../shared/api/application';

export const getAppsAction = createAsyncThunk<IApplication[]>(
	'application/getApps',
	getApplications
);

export const newAppAction = createAsyncThunk<INewAppResponse, INewAppRequest>(
	'application/newApp',
	newApplication
);
