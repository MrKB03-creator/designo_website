
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from 'react';

const locations = {
  canada: {
    lat: 43.64407644558614,
    lng: -79.39457098977417
  },
  australia: {
    lat: -30.329353391171253,
    lng: 149.78827089798332
  },
  unitedKingdom: {
    lat: 51.732230253788465,
    lng: -3.862071604298318
  }
};

interface MapsProps {
  location: string;
}

const Maps: React.FC<MapsProps> = ({ location }) => {
  const [containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: '100%',
    borderRadius: window.innerWidth <= 640 ? '0px' : '15px'
  });

  useEffect(() => {
    const handleResize = () => {
      setContainerStyle({
        width: '100%',
        height: '100%',
        borderRadius: window.innerWidth <= 640 ? '0px' : '15px'
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const center = locations[location as keyof typeof locations];

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;