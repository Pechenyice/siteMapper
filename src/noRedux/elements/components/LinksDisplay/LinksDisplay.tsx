import React from "react";
import LinkElem from "../LinkElem/LinkElem";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    links: PProps["link"][]
}

const LinksDisplay: React.FC<IProps>  = ({links}) => {
    return (
        <div>
            {
                links.map((l, i) => <LinkElem key={i} data={l} />)
            }
        </div>
    );
}

export default LinksDisplay;
