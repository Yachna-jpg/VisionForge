import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons broken by webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom violet marker
const userIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Mock route: Park Street → Esplanade, Kolkata
const routeCoords = [
  [22.5535, 88.3513], // Park Street
  [22.5545, 88.348],
  [22.555, 88.345],
  [22.556, 88.342],
  [22.5571, 88.3392], // Esplanade
];

function RecenterMap({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);
  return null;
}

export default function MapView() {
  const userPosition = routeCoords[1]; // current position along route
  const destination = routeCoords[routeCoords.length - 1];

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
      <MapContainer
        center={userPosition}
        zoom={15}
        className="w-full h-full min-h-[350px]"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Route polyline */}
        <Polyline
          positions={routeCoords}
          pathOptions={{ color: "#8B5CF6", weight: 5, opacity: 0.8 }}
        />

        {/* User marker */}
        <Marker position={userPosition} icon={userIcon}>
          <Popup>
            <span className="text-sm font-semibold">📍 Current Location</span>
            <br />
            <span className="text-xs text-gray-500">Park Street, Kolkata</span>
          </Popup>
        </Marker>

        {/* Destination marker */}
        <Marker position={destination}>
          <Popup>
            <span className="text-sm font-semibold">🏁 Destination</span>
            <br />
            <span className="text-xs text-gray-500">Esplanade</span>
          </Popup>
        </Marker>

        <RecenterMap center={userPosition} />
      </MapContainer>
    </div>
  );
}
