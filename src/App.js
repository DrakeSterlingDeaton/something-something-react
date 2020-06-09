import React from 'react';
import logo from 'public/logo/SVGLogo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Coming Soon
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
