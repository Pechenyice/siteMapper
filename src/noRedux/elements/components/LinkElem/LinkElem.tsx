import React from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    data: PProps["link"]
}

const LinkElem: React.FC<IProps>  = ({data}) => {
    return (
        <a href={data.url}>
            <div>
                <p>name: {data.name}</p>
                <p>folder: {data.folder}</p>
            </div>
        </a>
    );
}

export default LinkElem;
