import React from 'react';

interface Props {
    image: string;
    author: string;
    name: string;
    released: string;
    rank: number;
}

const Album: React.FC<Props> = ({ image, rank, name, author, released }: Props) => {
    return (
        <div className="album-container">
            <div className="flip-card">
                <div className="flip-card_front">
                    <div className="rank">
                        <span>{rank}</span>
                    </div>
                    <img alt="none" src={image} />
                </div>
                <div className="flip-card_back">
                    <div>{name}</div>
                    <div>{author}</div>
                    <div> {released}</div>
                </div>
            </div>
        </div>
    );
};

export default Album;
