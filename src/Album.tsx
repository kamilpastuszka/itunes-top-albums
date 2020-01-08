import React from 'react';

interface Props {
    image: string;
    rank: number;
}

const Album: React.FC<Props> = ({ image, rank }) => {
    return (
        <div className="album-container">
            <div className="flip-card">
                <div className="flip-card_front">
                    <div className="rank">
                        <span>{rank}</span>
                    </div>
                    <img alt="none" src={image} />
                </div>
                <div className="flip-card_back"></div>
            </div>
        </div>
    );
};

export default Album;
