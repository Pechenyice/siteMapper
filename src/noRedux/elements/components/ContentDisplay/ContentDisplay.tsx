import React from "react";
import FoldersDisplay from "../FoldersDisplay/FoldersDisplay";
import LinksDisplay from "../LinksDisplay/LinksDisplay";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    links: PProps["link"][],
    folders: PProps["folder"][],
}

const ContentDisplay: React.FC<IProps>  = ({links, folders}) => {
    return (
        <>
            <LinksDisplay links={links}/>
            <FoldersDisplay folders={folders}/>
        </>
    );
}

export default ContentDisplay;
