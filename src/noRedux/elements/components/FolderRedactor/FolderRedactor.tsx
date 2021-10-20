import React from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    handleAddFolder: (link: PProps["folder"]) => void
}

// another case 

function FolderRedactor({handleAddFolder} : IProps) {
    return (
        <section className="main__folderRedactor main__redactor">
            folder redactor
        </section>
    );
}

export default FolderRedactor;
