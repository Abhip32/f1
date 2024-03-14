import React from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: require("../assets/images/marker.png"),
  iconSize: [35, 35],
  iconAnchor: [18, 35],
  popupAnchor: [0, -35],
});

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const Map = ({ coords }) => {
  return (
    <MapContainer center={coords} zoom={13}>
      {coords && <SetViewOnClick coords={coords} />}
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <Marker icon={icon} position={coords}></Marker>
    </MapContainer>
  );
};

export default Map;
