import React from "react";
import "./Info.css";
import virtual from "../assets/info.png";

const Info = () => {
return (
<div className="info">
    <div className="container">
        <div className="left">
            <h2>Explore Virtual Worlds</h2>
            <p>Virtual worlds are blockchain-fueled alternative realities where
                users can create and trade digital goods, play games,
                and display <span className="blue">NFTs</span> in galleries, among other intriguing use cases.
                Non-fungible token categories like <span className="blue">art, collectibles, and
                domain names </span>are all put to use in the metaverse, with ecosystems
                built and maintained by the crypto community.
            </p>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={virtual} alt="aa" />
            </div>
        </div>

    </div>
</div>
)
}
export default Info;