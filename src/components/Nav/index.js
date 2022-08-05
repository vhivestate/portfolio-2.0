import React from 'react'
import '../../index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

function Nav(props) {
  return (
    <>
    <nav id='navbar'>
    <div className='buttons'>
        <button
        color="warning"
        outline
        onClick={() => props.setCurrentPage(0)}>About</button>
        <button
        color="warning"
        outline
         onClick={() => props.setCurrentPage(1)}>Contact</button>
        <button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(2)}>Portfolio</button>
        <button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(3)}>Resume</button>
        </div>
    </nav>
    </>
  )
}

export default Nav

