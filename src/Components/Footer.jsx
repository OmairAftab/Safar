import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>
                    Safar
                </h1>
                <p className="line">
                    Choose your favorite destiation
                </p>
            </div>
        </div>





        <div className="bottom">

            {/* first coloumn of footer  */}
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>


             <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>


             <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshoot</a>
                <a href="/">Contact us</a>
            </div>

             <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>


        </div>
    </div>
  )
}

export default Footer