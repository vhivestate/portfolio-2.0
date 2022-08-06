import React from 'react'
import '../../index.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (

    <footer>

      <div className='socialMediaIcons'>

      <a href="https://github.com/vhivestate/">
      <FontAwesomeIcon icon={faGithub} className='socialMediaIcons' />      
       </a>

      <a href="https://twitter.com/vhivestate/"> 
      <FontAwesomeIcon icon={faTwitter} className='socialMediaIcons' /> 
     </a>

      <a href="https://discord.com/channels/950224023973933116/950224023973933121/">
      <FontAwesomeIcon icon={faDiscord} className='socialMediaIcons' /> 
      </a>

      <a href="https://www.linkedin.com/in/valeriagarcia00974/">
      <FontAwesomeIcon icon={faLinkedin} className='socialMediaIcons'/> 
     </a>
      </div>
      
      <div className='endFt' >
        <p>Website by Valeria Garcia
        
        </p>
      </div>
    </footer>
  )
}
export default Footer