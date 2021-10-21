import React, { useState } from "react";
import {IBaseElements as PProps} from './../../../core/types';

interface IProps {
	handleAddFolder: (link: PProps["folder"]) => void;
}

// another case

function FolderRedactor({ handleAddFolder }: IProps) {
	let [folder, setFolder] = useState<string>("");

	function handleFolderChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFolder(e.target.value);
	}

	function handleFolderCreate() {
		handleAddFolder({
			name: folder,
		});
	}

	return (
		<section className="main__folderRedactor main__redactor">
			<div className="redactor__wrapper">
				<label htmlFor="folder">Folder name: </label>
				<input
					type="text"
					value={folder}
					onChange={handleFolderChange}
					name={"folder"}
				></input>
				<button onClick={handleFolderCreate}>create folder</button>
			</div>
		</section>
	);
}

export default FolderRedactor;
