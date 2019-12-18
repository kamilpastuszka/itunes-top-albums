import React, { useState, useEffect } from 'react';

const Albums: React.FC = () => {
    const [albums, setAlbums] = useState<any[] | undefined>(undefined);

    const fetchData = async (): Promise<void> => {
        const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
        const json = await response.json();
        await setAlbums(json.feed.entry);
        console.log('albums', json.feed.entry[0]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <div></div>;
};

export default Albums;
