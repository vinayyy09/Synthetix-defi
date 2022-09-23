import React from 'react'
import Mainvideo from '../assets/video3.mp4'
import './Hero.css'
import {FaEthereum} from 'react-icons/fa'

const hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={Mainvideo} type='video/mp4' />
        </video>
        <div className="hero-text">
            <h1>Decentralized finance</h1>
            <h1><span className="blue">Trading</span> Protocol</h1>
            <p>Unique digital collectibles living on the Ethereum blockchain.</p>
            <div className="btn-group">
                <button className='btn'>Items</button>
                <button className='btn btn-outline'>Activity</button>
            </div>
        </div>
        <div className="bottom-text">
            <h2>Total Volume Secured: <FaEthereum/>645.73 K</h2>
        </div>
    </div>
  )
}

export default hero