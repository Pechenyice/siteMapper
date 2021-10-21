import React from "react";
import LinkElem from "../LinkElem/LinkElem";
import {IBaseElements as PProps} from './../../../core/types';

interface IProps {
    links: PProps["link"][]
}

const LinksDisplay: React.FC<IProps>  = ({links}) => {
    return (
        <div className="display__container">
            {
                links.map((l, i) => <LinkElem key={i} data={l} index={i}/>)
            }
        </div>
    );
}

export default LinksDisplay;
