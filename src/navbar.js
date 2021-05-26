import React from 'react'
import {Link} from 'react-router-dom'
import Roads from './images/roads_logo.png'
function Nav2()
{
    return <div className="navOuter">
                <div className="container"> 
                    <div className="navInner">
                        <Link to='/'> <img src={Roads} className="roadlogo" alt="Road"/></Link>
                        <Link to='/' className='nav1'>User Login  </Link> 
                        <Link to='/admin' className='nav1'>Service Provider</Link> 
                    </div>
                </div>
            </div>
}
export default Nav2