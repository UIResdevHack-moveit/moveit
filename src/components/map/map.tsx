import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

function LocationMap() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <MapComponent />
    </MapContainer>
  );
}

function MapComponent() {
  const map = useMap();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 13);
        const userMarker = L.marker([latitude, longitude]).addTo(map);
        userMarker.bindPopup("Your Current Location");
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  }, [map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </>
  );
}

export default LocationMap;
