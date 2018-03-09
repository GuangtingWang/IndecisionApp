import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>    
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>some content</p>
    </div>
)

//children props
ReactDOM.render(<Layout>{template}</Layout>, document.getElementById('app'));