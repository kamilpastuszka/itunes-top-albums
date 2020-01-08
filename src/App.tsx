import React from 'react';
import Header from './Header';
import Albums from './Albums';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <Header />
                <Albums />
            </div>
        </div>
    );
};

export default App;
