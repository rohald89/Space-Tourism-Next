import Image from 'next/image';
import { useState } from 'react';
import Tablist from '../components/Tablist';
import data from '../data';

const destination = () => {
    const page = 'destination';
    const [activeTab, setActiveTab] = useState(0);
    const destinationData = data.destinations[activeTab];
    const tabs = data.destinations.map((item) => item.name);

    return (
        <main
            id="main"
            className="grid-container grid-container--destination flow"
        >
            <h1 className="numbered-title">
                <span aria-hidden="true">01</span> Pick your destination
            </h1>

            <div className="image">
                <Image
                    src={destinationData.images.png}
                    alt="the moon"
                    width={445}
                    height={445}
                />
            </div>

            <Tablist
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
                page={page}
                srOnly={false}
                type={'underline'}
            />

            <article
                className="destination-info flow"
                id={`${destinationData.name}-tab`}
                tabIndex="0"
                role="tabpanel"
            >
                <h2 className="fs-800 uppercase ff-serif">
                    {destinationData.name}
                </h2>

                <p>{destinationData.description}</p>

                <div className="destination-meta flex">
                    <div>
                        <h3 className="text-accent fs-200 uppercase">
                            Avg. distance
                        </h3>
                        <p className="ff-serif uppercase">
                            {destinationData.distance}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-accent fs-200 uppercase">
                            Est. travel time
                        </h3>
                        <p className="ff-serif uppercase">
                            {destinationData.travel}
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default destination;
