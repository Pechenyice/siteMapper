import React from "react";
import { connect } from "react-redux";
import { IInitialState, Action, IBaseElements } from "../../../core/types";
import {createFolders, createLinks} from "./../../../core/actions";
import { Dispatch } from "redux";
import ReduxApp from "../ReduxApp/ReduxApp";

const ReduxAppManager = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);

function mapStateToProps(state: IInitialState) {
    return {
        links: state.links,
        folders: state.folders
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
        onNeedCreateLinks: (links: IBaseElements["link"][]) => {
            dispatch(createLinks(links));
        },
        onNeedCreateFolders: (folders: IBaseElements["folder"][]) => {
            dispatch(createFolders(folders));
        }
    };
}

export default ReduxAppManager;
