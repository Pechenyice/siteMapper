import { Action, IBaseElements, TYPES } from "./types";

export function createLinks(links: IBaseElements["link"][]) {
    const dispatch: Action = {
        type: TYPES.CREATE_LINK,
        links: links
    };
    return dispatch;
}

export function createFolders(folders: IBaseElements["folder"][]) {
    const dispatch: Action = {
        type: TYPES.CREATE_FOLDER,
        folders: folders
    };
    return dispatch;
}