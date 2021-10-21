import React from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    data: PProps["link"],
    index: number
}

const LinkElem: React.FC<IProps>  = ({data, index}) => {
    return (
        <a href={data.url}>
            <div>
                Favorite {index}
                <p>name: {data.name}</p>
                <p>folder: {data.folder}</p>
            </div>
        </a>
    );
}

export default LinkElem;
