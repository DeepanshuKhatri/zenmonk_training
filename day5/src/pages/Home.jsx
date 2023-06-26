import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav className="nav">
            <ul>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/login'>Login</Link></li>

            </ul>
        </nav>

    </div>
  )
}

export default Home