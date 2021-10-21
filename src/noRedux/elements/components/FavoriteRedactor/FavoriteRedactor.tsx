import React, { useState } from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    handleAddLink: (link: PProps["link"]) => void
    handleAddFolder: (link: PProps["folder"]) => void
    folders: PProps["folder"][]
}

const FavoriteRedactor: React.FC<IProps> = ({handleAddLink, handleAddFolder, folders}) => {

    let [favorite, setFavorite] = useState<PProps["link"]>({
        name: '',
        url: '',
        folder: 'default'
    });
    
    function handleInputChange(e : React.ChangeEvent<HTMLInputElement>) {
        setFavorite(
            Object.assign(
                {},
                favorite,
                {
                    [e.target.name]: e.target.value
                }
            )
        );
    }

    function handleFavoriteCreate() {
        if (!folders.filter(e => e.name === favorite.folder).length) handleAddFolder({name: favorite.folder});
        handleAddLink(favorite);
    }

    return (
        <section className="main__favoriteRedactor main__redactor">
            <div className="redactor__wrapper">
            <label htmlFor="name">Favorite name: </label>
				<input
					type="text"
					value={favorite.name}
                    name={'name'}
					onChange={handleInputChange}
				></input>
                <label htmlFor="url">Favorite url: </label>
                <input
					type="text"
					value={favorite.url}
                    name={'url'}
					onChange={handleInputChange}
				></input>
                <label htmlFor="folder">Favorite folder: </label>
                <input
					type="text"
					value={favorite.folder}
                    name={'folder'}
					onChange={handleInputChange}
				></input>
				<button onClick={handleFavoriteCreate}>create favorite</button>
			</div>
        </section>
    );
}

export default FavoriteRedactor;
