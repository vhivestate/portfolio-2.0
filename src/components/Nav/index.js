import React from 'react'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

function Nav(props) {
  return (
    <>
    <nav id='navbar'>
    <div className='buttons'>
        <btn
        color="warning"
        outline
        onClick={() => props.setCurrentPage(0)}>About</btn>
        <btn
        color="warning"
        outline
         onClick={() => props.setCurrentPage(1)}>Contact</btn>
        <btn 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(2)}>Portfolio</btn>
        <btn 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(3)}>Resume</btn>
        </div>
    </nav>
    </>
  )
}

export default Nav

