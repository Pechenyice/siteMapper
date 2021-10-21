import React, { useState } from "react";
import {IState as PProps} from './../../TSRootApp';

interface IProps {
    handleAddLink: (link: PProps["link"]) => void
}

const FavoriteRedactor: React.FC<IProps> = ({handleAddLink}) => {

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
        handleAddLink(favorite);
    }

    return (
        <section className="main__favoriteRedactor main__redactor">
            <div className="redactor__wrapper">
				<input
					type="text"
					value={favorite.name}
                    name={'name'}
					onChange={handleInputChange}
				></input>
                <input
					type="text"
					value={favorite.url}
                    name={'url'}
					onChange={handleInputChange}
				></input>
                <input
					type="text"
					value={favorite.folder}
                    name={'folder'}
					onChange={handleInputChange}
				></input>
				<button onClick={handleFavoriteCreate}>create folder</button>
			</div>
        </section>
    );
}

export default FavoriteRedactor;
