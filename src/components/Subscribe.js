import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join the <span className='blue'>Community</span></h2>
            <p>Join our mailing list to stay in the loop with our newest feature releases and NFT drops</p>
            <form action="https://getform.io/f/e431f0b2-1b6d-4607-80be-c11d1d60c205" method='POST'>
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter your email' />
                    <button className="btn">Signup</button>
                </div>

                <div className="form-container">
                    <input type="checkbox"/> <p>I’d like to receive emails about the news and updates.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe