import React, { useState } from "react";
import ContentDisplay from "./components/ContentDisplay/ContentDisplay";
import ModalManager from "./components/ModalManager/ModalManager";

export interface IState {
	link: {
		name: string;
		url: string;
		folder: string;
	};
	folder: {
		name: string;
	};
}

function TSRootApp() {
	let [links, setLinks] = useState<IState["link"][]>([]);

	let [folders, setFolders] = useState<IState["folder"][]>([
		{ name: "default" },
	]);

	return (
		<>
			<ContentDisplay 
                folders={folders} 
                links={links} 
            />
			<ModalManager
				setFolders={setFolders}
				folders={folders}
				setLinks={setLinks}
				links={links}
			/>
		</>
	);
}

export default TSRootApp;
