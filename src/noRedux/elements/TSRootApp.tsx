import React, { useState } from "react";
import ModalManager from "./components/ModalManager/ModalManager";

export interface IState {
    link: {
        name: string,
        url: string,
        folder: string
    },
    folder: {
        name: string
    }
}

function TSRootApp() {

    let [links, setLinks] = useState<IState["link"][]>([]);

    let [folders, setFolders] = useState<IState["folder"][]>([{name: 'default'}]);

    return (
        <>
            <ModalManager 
                setFolders={setFolders} 
                folders={folders}
                setLinks={setLinks} 
                links={links}
            />
        </>
    );
}

export default TSRootApp;