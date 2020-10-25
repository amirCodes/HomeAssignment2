

import React from 'react'
import Logo from '../logo.png'


const image={
    width: '30%',
    height: '135px',
    margin: '0px 10% ',
    padding: '0px'
}


function MoneyLionLogo() {
  
    return (
        <div>
           <a href="/">
           <img  style={image} src={Logo} />
           </a>
            <hr/>
        </div>
    )
}

export default MoneyLionLogo;
