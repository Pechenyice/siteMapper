export interface IBaseElements {
	link: {
		name: string;
		url: string;
		folder: string;
	};
	folder: {
		name: string;
	};
}

export interface IInitialState {
    links: IBaseElements["link"][],
    folders: IBaseElements["folder"][],
}

export enum TYPES {
    CREATE_LINK = 'CREATE_LINK',
    CREATE_FOLDER = 'CREATE_FOLDER',
}

interface CreateLink {
    type: TYPES.CREATE_LINK;
    links: IBaseElements["link"][]
}

interface CreateFolder {
    type: TYPES.CREATE_FOLDER;
    folders: IBaseElements["folder"][]
}

export type Action = CreateLink | CreateFolder;