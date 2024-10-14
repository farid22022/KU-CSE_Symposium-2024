import { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider"; 

const CEOs = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("peoples.json") // Fetch data from a JSON or API
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  return (
    <div className="p-5">
      {/* Pass the fetched persons data to ImageSlider */}
      <ImageSlider persons={persons} />
    </div>
  );
};

export default CEOs;
