import React, { useEffect, useState } from "react";
import { IBaseElements } from "../../../core/types";
import ContentDisplay from './../ContentDisplay/ContentDisplay';
import ModalManager from './../ModalManager/ModalManager'

interface IProps {
    links: IBaseElements["link"][], 
    folders: IBaseElements["folder"][],
    onNeedCreateLinks: (links: IBaseElements["link"][]) => void,
    onNeedCreateFolders: (links: IBaseElements["folder"][]) => void
}

function ReduxApp({links, folders, onNeedCreateLinks, onNeedCreateFolders}: IProps) {
	
    useEffect(() => {
        if (!localStorage.getItem('siteMapperLinks')) localStorage.setItem('siteMapperLinks', JSON.stringify([])); 
        if (!localStorage.getItem('siteMapperFolders')) localStorage.setItem('siteMapperFolders', JSON.stringify([])); 
        onNeedCreateLinks(JSON.parse(localStorage.getItem('siteMapperLinks') || '[]'));
        onNeedCreateFolders(JSON.parse(localStorage.getItem('siteMapperFolders') || '[]'));
    }, []);

	return (
        <>
            <ContentDisplay 
                folders={folders} 
                links={links} 
            />
			<ModalManager
				setFolders={onNeedCreateFolders}
				folders={folders}
				setLinks={onNeedCreateLinks}
				links={links}
			/>
        </>
	);
}

export default ReduxApp;
