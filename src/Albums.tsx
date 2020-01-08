import React, { useState, useEffect } from 'react';
import Album from './Album';

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
            <div className="row">
                {albums.map((album, i) => {
                    const rank = 1;
                    return <Album image={album['im:image'][2].label} key={i} rank={rank + i} />;
                })}
            </div>
        );
    } else {
        data = <div>error in displaying data</div>;
    }

    return data;
};

export default Albums;
