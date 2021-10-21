import React from "react";
import FoldersDisplay from "../FoldersDisplay/FoldersDisplay";
import LinksDisplay from "../LinksDisplay/LinksDisplay";
import {IBaseElements as PProps} from './../../../core/types';

interface IProps {
	links: PProps["link"][];
	folders: PProps["folder"][];
}

const ContentDisplay: React.FC<IProps> = ({ links, folders }) => {
	return (
		<section className="main__displayWrapper">
			<section className="main__display">
				<LinksDisplay links={links} />
				<FoldersDisplay folders={folders} />
			</section>
		</section>
	);
};

export default ContentDisplay;
