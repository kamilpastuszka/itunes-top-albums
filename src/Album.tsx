import React from 'react';

interface Props {
    image: string;
}

const Album: React.FC<Props> = ({ image }) => {
    return (
        <div className="album-container">
            <div className="flip-card">
                <div className="flip-card_front">
                    <img alt="none" src={image} />
                </div>
                <div className="flip-card_back"></div>
            </div>
        </div>
    );
};

export default Album;
