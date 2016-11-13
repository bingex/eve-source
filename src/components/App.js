import React from 'react';

import Header from './Header';
import '../assets/css/styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                { this.props.children }
            </div>
        );
    }
}

export default App;
