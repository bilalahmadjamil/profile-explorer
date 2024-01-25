import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  latitude: string;
  longitude: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.YOUR_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.addEventListener('load', () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        map,
        title: 'User Location',
      });
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ height: '200px', width: '100%' }} />;
};

export default GoogleMap;
