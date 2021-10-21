import React from "react";
import FolderElem from "../FolderElem/FolderElem";
import LinkElem from "../LinkElem/LinkElem";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    folders: PProps["folder"][]
}

const FoldersDisplay: React.FC<IProps>  = ({folders}) => {
    return (
        <div className="display__container">
            {
                folders.map((f, i) => <FolderElem key={i} data={f} index={i} />)
            }
        </div>
    );
}

export default FoldersDisplay;
