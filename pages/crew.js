import Image from 'next/image';
import { useState } from 'react';
import Tablist from '../components/Tablist';
import data from '../data';

const Crew = () => {
    const page = 'crew';
    const [activeTab, setActiveTab] = useState(0);
    const crewData = data.crew[activeTab];
    const tabs = data.crew.map((item) => item.role);

    return (
        <main id="main" className="grid-container grid-container--crew flow">
            <h1 className="numbered-title">
                <span aria-hidden="true">02</span> Meet your crew
            </h1>

            <Tablist
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
                page={page}
                srOnly={true}
                type={'dot'}
            />

            <article
                className="crew-details flow"
                id={`${crewData.role}-tab`}
                role="tabpanel"
                tabIndex="0"
            >
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">
                        {crewData.role}
                    </h2>
                    <p className="fs-700 uppercase ff-serif">{crewData.name}</p>
                </header>
                <p>{crewData.bio}</p>
            </article>

            <div className="image">
                <Image
                    src={crewData.images.png}
                    alt="Douglas Hurley"
                    width={514}
                    height={700}
                />
            </div>
        </main>
    );
};

export default Crew;
