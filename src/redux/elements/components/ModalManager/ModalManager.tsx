import React from "react";
import FavoriteRedactor from "../FavoriteRedactor/FavoriteRedactor";
import FolderRedactor from "../FolderRedactor/FolderRedactor";
import {IBaseElements as PProps} from './../../../core/types';

interface IProps {
    setLinks: (links: PProps["link"][]) => void
    links: PProps["link"][],
    setFolders: (folders: PProps["folder"][]) => void
    folders: PProps["folder"][],
}

const ModalManager: React.FC<IProps>  = ({setLinks, links, setFolders, folders}) => {
    function handleAddFolder(folder: PProps["folder"]) {
        setFolders([
            folder
        ]);
        localStorage.setItem('siteMapperFolders', JSON.stringify([
            ...folders,
            folder
        ]));
    }

    function handleAddLink(link: PProps["link"]) {
        setLinks([
            link
        ]);
        localStorage.setItem('siteMapperLinks', JSON.stringify([
            ...links,
            link
        ]));
    }

    return (
        <section className="main__modalManager">
            <FolderRedactor handleAddFolder={handleAddFolder}/>
            <FavoriteRedactor handleAddLink={handleAddLink} handleAddFolder={handleAddFolder} folders={folders}/>
        </section>
    );
}

export default ModalManager;
