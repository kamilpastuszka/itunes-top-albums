import React from 'react';

interface Props {
    image: string;
}

const Album: React.FC<Props> = ({ image }) => {
    return (
        <div className="row">
            <img alt="none" src={image} />
        </div>
    );
};

export default Album;
