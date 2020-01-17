/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Album from './Album';
import moment from 'moment';

const Albums: React.FC = () => {
    const [albums, setAlbums] = useState<any[] | undefined>(undefined);

    const fetchData = async (): Promise<void> => {
        const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
        const json = await response.json();
        await setAlbums(json.feed.entry);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let data;

    if (albums) {
        data = (
            <div className="row row-container">
                {albums.map((album, i) => {
                    const rank = 1;
                    const releaseDate = moment.utc(album['im:releaseDate'].label).format('MMMM Do YYYY');
                    return (
                        <Album
                            image={album['im:image'][2].label}
                            name={album['im:name'].label}
                            author={album['im:artist'].label}
                            released={releaseDate}
                            key={i}
                            rank={rank + i}
                        />
                    );
                })}
            </div>
        );
    } else {
        data = <h3>loading albums..</h3>;
    }

    return data;
};

export default Albums;
