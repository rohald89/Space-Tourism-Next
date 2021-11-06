import Image from 'next/image';
import { useState } from 'react';
import Tablist from '../components/Tablist';
import data from '../data';

const technology = () => {
    const page = 'technology';
    const [activeTab, setActiveTab] = useState(0);
    const techData = data.technology[activeTab];
    const tabs = data.technology.map((item) =>
        item.name.split(' ').length > 1 ? item.name.split(' ')[1] : item.name
    );
    console.log(techData);
    return (
        <main
            id="main"
            className={`grid-container grid-container--${page} flow`}
        >
            <h1 className="numbered-title">
                <span aria-hidden="true">03</span> Space Launch 101
            </h1>

            <div className="image">
                <Image
                    src={techData.images.portrait}
                    alt={techData.name}
                    height={527}
                    width={515}
                />
            </div>

            <Tablist
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
                page={page}
                type={'numbered'}
            />

            <article
                className="technology-details flow"
                id="vehicle-tab"
                role="tabpanel"
                tabIndex="0"
            >
                <header className="flow flow--space-small">
                    <h2 className="text-accent fs-400 uppercase">
                        The terminology...
                    </h2>
                    <p className="fs-700 uppercase ff-serif">{techData.name}</p>
                </header>
                <p>{techData.description}</p>
            </article>
        </main>
    );
};

export default technology;
