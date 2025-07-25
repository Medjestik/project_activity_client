export interface IApplicationStore {
	application: IApplication | null;
	applications: IApplication[];
	isLoading: boolean;
	error: string | null;
}

export interface INewAppRequest {
	title: string;
	description: string;
	company: string;
}

export interface INewAppResponse {
	title: string;
	description: string;
	company: string;
	creation_date: string;
	status: {
		code: string;
		name: string;
	};
	author: number;
	id: number;
}

export interface IApplication {
	title: string;
	description: string;
	company: string;
	author: number;
	creation_date: string;
	id: number;
	status: {
		code: string;
		name: string;
	};
}
