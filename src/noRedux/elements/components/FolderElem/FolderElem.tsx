import React from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    data: PProps["folder"]
}

const folderElem: React.FC<IProps>  = ({data}) => {
    return (
            <div>
                <p>name: {data.name}</p>
            </div>
    );
}

export default folderElem;
