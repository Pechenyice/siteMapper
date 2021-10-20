import React from "react";
import FavoriteRedactor from "../FavoriteRedactor/FavoriteRedactor";
import FolderRedactor from "../FolderRedactor/FolderRedactor";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    setLinks: React.Dispatch<React.SetStateAction<PProps["link"][]>>
    links: PProps["link"][],
    setFolders: React.Dispatch<React.SetStateAction<PProps["folder"][]>>
    folders: PProps["folder"][],
}

const ModalManager: React.FC<IProps>  = ({setLinks, links, setFolders, folders}) => {
    function handleAddFolder(folder: PProps["folder"]) {
        setFolders([
            ...folders,
            folder
        ]);
    }

    function handleAddLink(link: PProps["link"]) {
        setLinks([
            ...links,
            link
        ]);
    }

    return (
        <section className="main__modalManager">
            <FolderRedactor handleAddFolder={handleAddFolder}/>
            <FavoriteRedactor handleAddLink={handleAddLink}/>
        </section>
    );
}

export default ModalManager;
