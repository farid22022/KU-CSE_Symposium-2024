
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container styling
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Coordinates for the location (example: Khulna University)
const center = {
  lat: 22.812, // Latitude for Khulna University
  lng: 89.556 // Longitude for Khulna University
};

const MapLocation = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Zoom level
      >
        {/* Marker to show the exact location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapLocation;
