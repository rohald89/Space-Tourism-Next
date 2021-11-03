import Image from 'next/image';

const crew = () => {
    return (
        <main id="main" className="grid-container grid-container--crew flow">
    <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

    <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
      <button aria-selected="true" aria-controls="commander-tab" data-image="commander-image" role="tab" tabIndex="0"><span className="sr-only">The commander</span></button>
      <button aria-selected="false" aria-controls="mission-tab" data-image="mission-image" role="tab" tabIndex="-1"><span className="sr-only">The mission specialist</span></button>
      <button aria-selected="false" aria-controls="pilot-tab" data-image="pilot-image" role="tab" tabIndex="-1"><span className="sr-only">The pilot</span></button>
      <button aria-selected="false" aria-controls="crew-tab" data-image="crew-image" role="tab" tabIndex="-1"><span className="sr-only">The crew engineer</span></button>
    </div>

    <article className="crew-details flow" id="commander-tab" role="tabpanel" tabIndex="0">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">Commander</h2>
        <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
      </header>
      <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.</p>
    </article> 
    
    
    <article hidden className="crew-details flow" id="mission-tab" role="tabpanel" tabIndex="0">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">Mission Specialist</h2>
        <p className="fs-700 uppercase ff-serif">Mark SHuttleworth</p>
      </header>
      <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
        the Linux-based Ubuntu operating system. Shuttleworth became the first South
        African to travel to space as a space tourist.</p>
    </article> 
    
    
    <article hidden className="crew-details flow" id="pilot-tab" role="tabpanel" tabIndex="0">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">Pilot</h2>
        <p className="fs-700 uppercase ff-serif">Victor Glover</p>
      </header>
      <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy where
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
        station systems flight engineer.</p>
    </article> 
    
    
    <article hidden className="crew-details flow" id="crew-tab" role="tabpanel" tabIndex="0">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">Flight Engineer</h2>
        <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
      </header>
      <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
        Ansari was the fourth self-funded space tourist, the first self-funded woman to
        fly to the ISS, and the first Iranian in space.</p>
    </article> 
    
    {/* <picture id="commander-image">
      <source srcSet="/public/crew/image-douglas-hurley.webp" type="image/webp"/>
      <Image src="/../public/crew/image-douglas-hurley.png" alt="Douglas Hurley" layout="fill"/>
    </picture>
    <picture hidden id="mission-image">
      <source srcSet="/public/crew/image-mark-shuttleworth.webp" type="image/webp"/>
      <Image src="/public/crew/image-mark-shuttleworth.png" alt="Douglas Hurley" layout="fill"/>
    </picture>
    <picture hidden id="pilot-image">
      <source srcSet="/public/crew/image-victor-glover.webp" type="image/webp"/>
      <Image src="/public/crew/image-victor-glover.png" alt="Douglas Hurley" layout="fill"/>
    </picture>
    <picture hidden id="crew-image">
      <source srcSet="/public/crew/image-anousheh-ansari.webp" type="image/webp"/>
      <Image src="/public/crew/image-anousheh-ansari.png" alt="Douglas Hurley" layout="fill"/>
    </picture> */}
  </main>
    )
}

export default crew
