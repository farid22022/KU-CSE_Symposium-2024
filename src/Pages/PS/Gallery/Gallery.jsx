import { useEffect, useState } from "react";
import SpeakerCard from "../../Shared/SpeakerCard/SpeakerCard";

const Gallery = () => {
    const [speakers, setSpeakers] = useState([]);
    useEffect(() => {
        fetch("peoples.json") // Fetch data from a JSON or API
          .then((res) => res.json())
          .then((data) => setSpeakers(data));
      }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center lg:px-36">
            {
                speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        speaker={speaker}
                        index={index}
                    >
                    </SpeakerCard>
                ))
            }
        </div>
    );
};

export default Gallery;
