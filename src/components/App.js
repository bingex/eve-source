import React from 'react';

import Header from './Header';
import '../assets/css/styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="grid">
                <Header />
                { this.props.children }
            </div>
        );
    }
}

export default App;
