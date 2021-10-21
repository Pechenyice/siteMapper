import { Action, IBaseElements, IInitialState, TYPES } from './types';

function reducer(
    state: IInitialState = {
        links: [],
        folders: []
    },
    action: Action
) {
    switch (action.type) {
        case TYPES.CREATE_LINK: {
            return Object.assign({}, state, {
                links: state.links.concat(action.links)
            })
        }

        case TYPES.CREATE_FOLDER: {
            return Object.assign({}, state, {
                folders: state.folders.concat(action.folders)
            })
        }

        default: {
            return state;
        }
    }
}

export default reducer;