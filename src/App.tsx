import React from 'react';
import Header from './Header';
import Albums from './Albums';

const App: React.FC = () => {
    return (
        <div className="jumbotron">
            <Header />
            <Albums />
        </div>
    );
};

export default App;
