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

    return (
        <section className="main__favoriteRedactor main__redactor">
            favorite redactor
        </section>
    );
}

export default FavoriteRedactor;
