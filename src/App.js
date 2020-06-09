import React from 'react';
import logo from './../public/logo/400dpiLogo.png';
import logo2 from './../public/logo/SVGLogo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     const container = document.getElementById('container');
    //     const inner = document.getElementById('inner');
    //
    //     const onMouseEnterHandler = function(event) {
    //         update(event);
    //     };
    //     const onMouseLeaveHandler = function() {
    //         inner.style = "";
    //     };
    //     const onMouseMoveHandler = function(event) {
    //         if (isTimeToUpdate()) {
    //             update(event);
    //         }
    //     };
    //
    //     container.onmouseenter = onMouseEnterHandler;
    //     container.onmouseleave = onMouseLeaveHandler;
    //     container.onmousemove = onMouseMoveHandler;
    // }

    render() {
        return (
            <div className="App" >
                <header className="App-header" id={"container"}>
                    <img  id={"inner"} src={logo} className="App-logo" alt="logo"/>
                    {/*<svg id={"inner"} xmlns={logo2} width="100" height="100"/>*/}
                    <p class={"text slogan"}>
                        Coming Soon
                    </p>
                </header>
            </div>
        );
    }

}

export default App;


