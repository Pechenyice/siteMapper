import React, { useState } from "react";
import { IState as PProps } from "./../../TSRootApp";

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
				<input
					type="text"
					value={folder}
					onChange={handleFolderChange}
				></input>
				<button onClick={handleFolderCreate}>create folder</button>
			</div>
		</section>
	);
}

export default FolderRedactor;
