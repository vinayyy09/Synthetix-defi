import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {HiShoppingCart} from 'react-icons/hi'

const About = () => {
  return (
    <div className='about'>
        <div className="container">
          <h2>Run your own crowd sale</h2>
          <p>Sell the items in your game to an initial user base of early adopters. Even sell off items in your own token.</p>
          <div className="card-container">
            <div className="card">
              <AboutCard 
                icon={<SiHiveBlockchain className='icon' />}
                heading='Sell packs of items'
                text='Instead of individual items, you can finally sell packs of items to give more to your users.'          
                />
            </div>

            <div className="card">
              <AboutCard
                icon={<SiStrapi className='icon' />}
                heading='Gift items to users'
                text='Reward your users with items to grow your apps user base.'
              />
            </div>

            <div className="card">
              <AboutCard
                icon={<SiFsecure className='icon' />}
                heading='Create lootboxes'
                text='Create lootboxes to gamify your app and build engagement.'
              />
            </div>

            <div className='card'>
              <AboutCard 
                icon={<HiShoppingCart className='icon' />}
                heading='Buy, sell and bundle'
                text='Enable users to create auctions (w/o paying gas) in any currency, bid on items, and create multi-item bundles.'
              />
            </div>
          </div>
          <a href="/" className="btn">Use DeFi</a>
        </div>
    </div>
  )
}

export default About