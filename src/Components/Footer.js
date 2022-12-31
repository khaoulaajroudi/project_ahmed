import React from 'react'
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>

            <div> <h1>Trippy</h1> 
            <p>choose your favorite destination.</p>
            </div>

            <div>
<a href='/'> <i className='fa-brands fa-facebook-square'></i></a>
<a href='/'> <i className='fa-brands fa-instagram-square'></i></a>
<a href='/'> <i className='fa-brands fa-behance-square'></i></a>
<a href='/'> <i className='fa-brands fa-twitter-square'></i></a>
            </div>

        </div>



        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href='./'>changing</a>
                <a href='./'>status</a>
                <a href='./'>license</a>
                <a href='./'>all versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='./'>Github</a>
                <a href='./'>Issues</a>
                <a href='./'>Project</a>
                <a href='./'>Twitter</a>
            </div>
           < div>
                <h4>Help</h4>
                <a href='./'>Support</a>
                <a href='./'>contact Us</a>
                
                
            </div>
            <div>
                <h4>Others</h4>
                <a href='./'>Terms of service</a>
                <a href='./'>Privacy Policy</a>
                <a href='./'>License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer