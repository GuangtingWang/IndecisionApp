import React from 'react';

//stateless functional component
//can use props(no this keyword), cannot use state
//presentational component
const Header = (props)=>(
    <div className='header'>
        <div className = 'container'>
            <h1 className="header__title">{props.title}</h1>
            {props.title && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: "Indecision"
};


export default Header;