import Image from "next/image"
import { useState } from "react";
import data from '../data';

const technology = () => {
    const [current, setCurrent] = useState(2);
    const { name, images, description } = data.technology[current];
    console.log(name)
    return (
        <main id="main" className="grid-container grid-container--technology flow">
        <h1 className="numbered-title"><span aria-hidden="true">03</span> Space Launch 101</h1>
    
        <div className="image">
            <Image src={images.portrait} height={527} width={515} />
        </div>

        <div className="numbered-indicators flex" role="tablist" aria-label="technology list">
          <button aria-selected="true" role="tab" aria-controls="vehicle-tab" className="text-white ff-serif fs-600" tabIndex="0" data-image="vehicle-image">1</button>
          <button aria-selected="false" role="tab" aria-controls="spaceport-tab" className="text-white ff-serif fs-600" tabIndex="-1" data-image="spaceport-image">2</button>
          <button aria-selected="false" role="tab" aria-controls="capsule-tab" className="text-white ff-serif fs-600" tabIndex="-1" data-image="capsule-image">3</button>
        </div>
    
    
        <article className="technology-details flow" id="vehicle-tab" role="tabpanel" tabIndex="0">
          <header className="flow flow--space-small">
            <h2 className="text-accent fs-400 uppercase">The terminology...</h2>
            <p className="fs-700 uppercase ff-serif">{name}</p>
          </header>
          <p>{description}</p>
        </article> 
    
    
        <article hidden className="technology-details flow" id="spaceport-tab" role="tabpanel" tabIndex="0">
          <header className="flow flow--space-small">
            <h2 className="text-accent fs-400 uppercase">The terminology...</h2>
            <p className="fs-700 uppercase ff-serif">Spaceport</p>
          </header>
          <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.</p>
        </article> 
    
    
        <article hidden className="technology-details flow" id="capsule-tab" role="tabpanel" tabIndex="0">
          <header className="flow flow--space-small">
            <h2 className="text-accent fs-400 uppercase">The terminology...</h2>
            <p className="fs-700 uppercase ff-serif">Space Capsule</p>
          </header>
          <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </article> 
        </main>
    )
}

export default technology
