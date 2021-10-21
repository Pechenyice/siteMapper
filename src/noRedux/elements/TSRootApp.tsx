import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        if (!localStorage.getItem('siteMapperLinks')) localStorage.setItem('siteMapperLinks', JSON.stringify([])); 
        if (!localStorage.getItem('siteMapperFolders')) localStorage.setItem('siteMapperFolders', JSON.stringify([])); 
        setLinks(JSON.parse(localStorage.getItem('siteMapperLinks') || '[]'));
        setFolders(JSON.parse(localStorage.getItem('siteMapperFolders') || '[]'));
    }, []);

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
