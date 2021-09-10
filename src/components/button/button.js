import {useState} from 'react';

import './style.css';

const Button = ({variant, children, onClick}) => { // desistruturação - usada para não repetir variante{}
    const classes = `button ${variant}`;
    // const [counter, setCounter] = useState(0);     
    // const increment = () => (setCounter(counter + 1));

    return (
        <button className={classes} onClick={onClick}>
            {children} 
        </button>
    )
}

export default Button