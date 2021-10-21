import React from "react";
import {IBaseElements as PProps} from './../../../core/types';

interface IProps {
    data: PProps["folder"],
    index: number
}

const folderElem: React.FC<IProps>  = ({data, index}) => {
    return (
            <div>
                folder {index}
                <p>name: {data.name}</p>
            </div>
    );
}

export default folderElem;
