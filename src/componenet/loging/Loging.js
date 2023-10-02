import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import l from '../../images/loging.jpg'
const Loging = () => {
    return (
        <div className='login'>
            <div className='back'>
                <img src={l} />
            </div>
            <h1>
                find your dream home  with us
                <Link to='serch' className='landin-links'>let's go</Link>
            </h1>
            <p>
                now you can find a houm appartment our eider a vacitoin houas eysly
            </p>
        </div>
    )
}

export default Loging