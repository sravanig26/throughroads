import React from 'react'
import {Link} from 'react-router-dom'
import Roads from './images/roads_logo.png'
function Nav()
{
    return     <div className="navOuter">
         <div className="container"> 
    <div className="navInner">
        <Link to='/home'> <img src={Roads} className="roadlogo" alt="Road"/></Link>
        <Link to='/home' className='nav1'>Home</Link>
        <Link to='/about' className='nav1'>About</Link>
        <Link to='/contact' className='nav1'>Contact</Link> 
        <Link to='/' className='nav1'>Logout</Link> 
    </div>
    </div>
    </div>
}
export default Nav